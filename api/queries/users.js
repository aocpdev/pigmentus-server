const {pool} = require('../db/index');
// Gets
const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
    } catch (error){
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(response.rows);
    } catch (error) {
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    } 
}

// Posts
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        // Insert into user table query
        const response = await pool.query('INSERT INTO users  (name, email) VALUES ($1, $2)', [name, email]);

        res.json({
            message: 'User Added Succesfully',
            body: {
                user: {name, email}
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
    
}

// Delete
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json(`User ${id} deleted success`)
}

// exports
module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser
}