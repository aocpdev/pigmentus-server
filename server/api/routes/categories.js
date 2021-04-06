const Router = require('express');
const Categories = require('../controllers/categories');

const router = Router();

router.get('/', Categories.getCategories)

module.exports = router;