// Get Queries
const getUsers = 'SELECT * FROM users';

const getUserById = 'SELECT * FROM users WHERE id = $1';

const getUserByEmail = 'SELECT * FROM users WHERE email = $1';

// Post Queries
const createUser = 
    'INSERT INTO users  (name, last_name, email, password, preferences, created_date, last_modified_date, last_seen, enable) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';

// Delete Queries
const deleteUser = 'DELETE FROM users WHERE id = $1';

// Put Queries
const updateUser = 'UPDATE users SET name = $1, lastname = $2, email = $3, enable = $4 WHERE id = $5';

// exports
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser, 
    getUserByEmail
}