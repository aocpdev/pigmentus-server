const { pool } = require('../../config/database');

const getCollections = function () {
    return pool.query('SELECT * FROM collections');
}

const saveCollection = function (collection) {
    return pool.query('INSERT INTO collections (name, enabled, date_created, date_modified, description) VALUES ($1, $2, $3, $4, $5)',
    [
        collection.name,
        collection.enabled,
        collection.dateCreated,
        collection.dateModified,
        collection.description
    ])
}

module.exports = {
    getCollections,
    saveCollection
}