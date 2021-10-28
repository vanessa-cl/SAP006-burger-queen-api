const { Router } = require('express');
const {
  getAllProducts,
  getProduct,
} = require('../controller/productsController');

const router = Router();

router.get('/', getAllProducts);
router.get('/:productId', getProduct);

module.exports = router;