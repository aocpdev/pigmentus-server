const { pool } = require('../../config/database');

const getCollections = function () {
    return pool.query('SELECT * FROM collections ORDER BY collections.name');
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
    saveCollection
}