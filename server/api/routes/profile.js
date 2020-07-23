const Router = require('express');
const { getUsers } = require('../queries/users');
const verifyAuth = require('../../auth/auth');

const router = Router();

router.get('/', verifyAuth, async (req, res) => {
    try {
        const response = await getUsers();
        res.status(200).json(response.rows);
    } catch (error){
        return res.status(500).json({
            message: "Error Ocurred",
            error
        });
    }
});

module.exports = router;
