const { Router } = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/exampleController');

const router = Router();
const id = '1';

router.get('/', getAllUsers);
router.get(`/${id}`, getUser);
router.post('/', createUser);
router.put(`/${id}`, updateUser);
router.delete(`/${id}`, deleteUser);

module.exports = router;