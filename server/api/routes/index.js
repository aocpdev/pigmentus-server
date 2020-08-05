const Router = require('express');
const verifyAuth = require('../../auth/auth');

// Router
const router = Router();

// Get Routes
// router.get('/', async (req, res) => {

// });

router.get('/home', verifyAuth, async(req, res, next) => {
    res.status(200).json({message: 'auth success, I am working on this part'})
});

module.exports = router;