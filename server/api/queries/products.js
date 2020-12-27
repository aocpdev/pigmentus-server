const { pool } = require('../../config/database');

const getProducts = function (collectionId) {
    return pool.query('SELECT * FROM products WHERE collection_id = $1', [collectionId]);
}
const getInventory = function () {
    return pool.query('SELECT * FROM products');
}

const saveProduct = function (product) {
    return pool.query('INSERT INTO products (name, description, image, price, collection_id, date_created, date_modified, enabled, categories, in_stock) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [
        product.name,
        product.description,
        product.images,
        product.price,
        product.colectionId,
        product.dateCreated,
        product.dateModified,
        product.enabled,
        product.categories,
        product.inStock
    ])
}

module.exports = {
    getProducts,
    saveProduct,
    getInventory
}