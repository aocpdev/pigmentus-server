const Router = require('express');
const Cart = require('../controllers/carts');

const router = Router();

router.get('/', Cart.getCart)
router.post('/', Cart.saveToCart)

module.exports = router;