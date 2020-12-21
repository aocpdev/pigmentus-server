const Router = require('express');
const { getUsers } = require('../queries/profile');
const verifyAuth = require('../../auth/auth');

const router = Router();

router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    return await res.status(200);

});

module.exports = router;
