const Router = require('express');
const verifyAuth = require('../../auth/auth');
const jwt = require('jsonwebtoken');

// Router
const router = Router();

router.get('/home', verifyAuth, async(req, res, next) => {
    res.status(200).json({message: 'auth success, I am working on this part'})
});


module.exports = router;