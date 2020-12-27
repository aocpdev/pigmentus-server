const Router = require('express');
const Products = require('../controllers/products');

const router = Router();

router.get('/', Products.getProducts)
router.get('/inventory', Products.getInventory)
router.post('/', Products.saveProduct);

module.exports = router;