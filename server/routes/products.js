const { Router } = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/exampleController');

const router = Router();

router.get('/', getAllProducts);
router.get('/productId', getProduct);
router.post('/', createProduct);
router.put('/productId', updateProduct);
router.delete('/productId', deleteProduct);

module.exports = router;