const { pool } = require('../../config/database');

const getCollections = function () {
    return pool.query('SELECT * FROM collections');
}

const saveCollection = function (collection) {
    return pool.query('INSERT INTO collections (name, disabled, date_created, date_modified) VALUES ($1, $2, $3, $4)',
    [
        collection.name,
        collection.disabled,
        collection.dateCreated,
        collection.dateModified
    ])
}

module.exports = {
    getCollections,
    saveCollection
}