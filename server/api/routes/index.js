const Router = require('express');
const verifyAuth = require('../../auth/auth');
const jwt = require('jsonwebtoken');

// Router
const router = Router();

router.get('/home', verifyAuth, async(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).json({message: 'auth success, I am working on this part'})
});


module.exports = router;