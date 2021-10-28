const { Router } = require('express');
const Users = require('./users');
const Products = require('./products');
const Orders = require('./orders');

const router = Router();

router.use('/users', Users);
router.use('/products', Products);
router.use('/orders', Orders);

module.exports = router;
