import Router from 'express';

// Router
const router = Router();

// Get Routes
router.get('/', async (req, res) => {
    res.send('Welcome to Pigmentus Api');
});

module.exports = router;