const Router = require('express');
const Collections = require('../controllers/collections');

const router = Router();

router.get('/', Collections.getCollections)
router.post('/', Collections.saveCollection);

module.exports = router;