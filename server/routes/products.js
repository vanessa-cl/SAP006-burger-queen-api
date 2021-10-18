const { Router } = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/exampleController');

const router = Router();
const id = '1';

router.get('/', getAllProducts);
router.get(`/${id}`, getProduct);
router.post('/', createProduct);
router.put(`/${id}`, updateProduct);
router.delete(`/${id}`, deleteProduct);

module.exports = router;