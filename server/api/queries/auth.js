import { pool } from '../../config/database';

const saveToken = function (authInfo) {
    return pool.query('INSERT INTO user_auth (id, token, issued_date) VALUES ($1, $2, $3)', 
    [
        authInfo.id,
        authInfo.token,
        authInfo.issued_date
    ]);
}

const hasToken = function (userId) {
    return pool.query('SELECT * FROM user_auth WHERE id = $1', [userId]);
}

const updateToken = function (authInfo) {
    return pool.query('UPDATE user_auth SET token = $1, issued_date = $2 WHERE id = $3',
    [
        authInfo.token,
        authInfo.issued_date,
        authInfo.id
    ]);
}

module.exports = {
    saveToken,
    updateToken,
    hasToken
}