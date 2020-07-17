// Get Queries
import { pool } from '../db/index';

const getUsers = function () {
    return pool.query('SELECT * FROM users');
}
const getUserById = function (id) {
    return pool.query('SELECT * FROM users WHERE id = $1', [id]);
}

const getUserByEmail  = function (email) {
    return pool.query('SELECT * FROM users WHERE email = $1', [email]);
}
// Post Queries
const createUser = function (user) {
    return pool.query('INSERT INTO users  (name, last_name, email, password, preferences, created_date, last_modified_date, last_seen, enable) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
    [
        user.name,
        user.last_name,
        user.email,
        user.password,
        user.preferences,
        user.created_date,
        user.las_modified_date,
        user.last_seen, 
        user.enable
    ]);
}
    ;

// Delete Queries
const deleteUser = function (){
    return pool.query('DELETE FROM users WHERE id = $1');
}
// Put Queries
const updateUser = function () {
    return pool.query('UPDATE users SET name = $1, lastname = $2, email = $3, enable = $4 WHERE id = $5');
}
// exports
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser, 
    getUserByEmail
}