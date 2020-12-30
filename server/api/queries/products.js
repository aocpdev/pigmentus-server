const { pool } = require('../../config/database');

const getProducts = function (collectionId) {
    return pool.query('SELECT * FROM products WHERE collection_id = $1', [collectionId]);
}
const getInventory = function () {
    return pool.query('SELECT * FROM products');
}

const saveProduct = function (product) {
    return pool.query('INSERT INTO products (name, description, image, customer_price, collection_id, date_created, date_modified, enabled, in_stock, purchase_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [
        product.name,
        product.description,
        product.image,
        product.customerPrice,
        product.colectionId,
        product.dateCreated,
        product.dateModified,
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