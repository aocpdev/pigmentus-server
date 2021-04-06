const { pool } = require('../../config/database');

const getCategories = function () {
    return pool.query('SELECT * FROM  categories;');
}

module.exports = {
    getCategories,
}