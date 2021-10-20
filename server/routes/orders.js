const { Router } = require('express');
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/exampleController');

const router = Router();

router.get('/', getAllOrders);
router.get('/:orderId', getOrder);
router.post('/', createOrder);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

module.exports = router;