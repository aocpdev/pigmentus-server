const { pool } = require('../../config/database');

const getProducts = function (collectionId) {
    return pool.query('SELECT * FROM products WHERE collection_id = $1', [collectionId]);
}
const getInventory = function () {
    return pool.query('SELECT p.id, p.name, p.description, p.image, p.customer_price as "customerPrice", p.enabled, p.in_stock as "inStock", p.collection_id as "collectionId", p.purchase_price as "purchasePrice", p.date_created as "dateCreated", p.date_modified as "dateModified", c.name as "collectionName" FROM products p JOIN collections c ON p.collection_id = c.id; ');
}

const saveProduct = function (product) {
    return pool.query('INSERT INTO products (name, description, image, customer_price, collection_id, date_created, enabled, in_stock, purchase_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [
        product.name,
        product.description,
        product.image,
        product.customerPrice,
        product.collectionId,
        product.dateCreated,
        product.enabled,
        product.inStock,
        product.purchasePrice
    ])
}

module.exports = {
    getProducts,
    saveProduct,
    getInventory
}