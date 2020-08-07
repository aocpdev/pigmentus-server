const Router = require('express');
const { getUsers } = require('../queries/profile');
const verifyAuth = require('../../auth/auth');

const router = Router();

router.get('/', async (req, res) => {
    
    return await res.status(200);
    
});

module.exports = router;
