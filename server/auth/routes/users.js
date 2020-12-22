const Router = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router.get('/', UserController.getUsers);

module.exports = router;