const Router = require('express');
const verifyAuth = require('../../auth/auth');

// Router
const router = Router();

// Get Routes
// router.get('/', async (req, res) => {
    
// });

router.get('/home', verifyAuth, async(req, res) => {
    console.log(res);
})

module.exports = router;