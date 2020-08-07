const Router = require('express');
const AuthController = require('../controllers/authController');
const verifyAuth = require('../auth');

const router = Router();

router.get('/', verifyAuth, AuthController.userIsAuth);

router.post('/signin', AuthController.userSignin);

router.post('/signup', AuthController.userSignup);

router.post('/delete', AuthController.userDelete);

router.put('/update', AuthController.userUpdate);

module.exports = router;