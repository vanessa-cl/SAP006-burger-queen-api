const { Router } = require('express');
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/exampleController');

const router = Router();
const id = '1';

router.get('/', getAllOrders);
router.get(`/${id}`, getOrder);
router.post('/', createOrder);
router.put(`/${id}`, updateOrder);
router.delete(`/${id}`, deleteOrder);

module.exports = router;