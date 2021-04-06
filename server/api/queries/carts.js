const { pool } = require('../../config/database');

const getCart = function (userId) {
    return pool.query(
        'SELECT c.id, c.user_id as "userId", u.name as "userName", u.email as "userEmail", c.product_id, p.name as "productName", p.customer_price as "customerPrice", p.weight, p.description, p.image FROM carts c JOIN products p ON p.id = c.product_id JOIN users u ON u.id = $1;',
        [
            userId
        ]);
}

const saveToCart = function (cart) {
    return pool.query('INSERT INTO carts (user_id, product_id) VALUES ($1, $2)', [cart.userId, cart.productId]);
}

module.exports = {
    getCart,
    saveToCart,
}