const Router = require('express');
const UserController = require('../controllers/authController');

const router = Router();

router.post('/login', UserController.user_login);

router.post('/signup', UserController.user_signup);

router.post('/delete', UserController.user_delete);

router.put('/update', UserController.user_update);

module.exports = router;