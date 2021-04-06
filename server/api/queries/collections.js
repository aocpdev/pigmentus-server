const { pool } = require('../../config/database');

const getCollections = function () {
    return pool.query('SELECT * FROM collections ORDER BY collections.name');
}

const getCollection = function (id) {
    return pool.query('SELECT * FROM collections WHERE id = $1', [id]);
}

const getAllCollections = function () {
    return pool.query('SELECT p.id, p.name, p.categories_id as "categoriesId", c.name as "categoryName" FROM collections p JOIN categories c ON p.categories_id = c.id;')
}

const saveCollection = function (collection) {
    return pool.query('INSERT INTO collections (name, enabled, date_created, date_modified, description, collection_name) VALUES ($1, $2, $3, $4, $5, $6)',
    [
        collection.name,
        collection.enabled,
        collection.dateCreated,
        collection.dateModified,
        collection.description,
        collection.collectioName
    ])
}

module.exports = {
    getCollections,
    getCollection,
    saveCollection,
    getAllCollections,
}