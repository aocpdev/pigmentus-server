const { pool } = require('../../config/database')

const getUsers = function () {
    return pool.query('SELECT * FROM users');
}

module.exports = getUsers;