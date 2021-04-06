const Router = require('express');
const Collections = require('../controllers/collections');

const router = Router();

router.get('/', Collections.getCollections)
router.get('/collection/', Collections.getCollection)
router.get('/all', Collections.getAllCollections);
router.post('/', Collections.saveCollection);

module.exports = router;