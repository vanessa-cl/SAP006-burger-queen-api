const Users = require('../db/models').Users;


const getAllUsers = (req, res) => {
  return Users.findAll()
  .then((users) => {
    res.status(200).send(users)
  })
};

const getUser = (req, res) => {
  return Users.findOne({
    where: {
      id: req.params.userId
    }
  })
  .then((user) => res.status(200).send(user))
  .catch((error) => res.status(400).send(error))
}

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { name, role } = req.body;
  const createdUser = await Users.findOne({
    where: {
      id: userId
    }
  })
    .then((user) => user)

  if (createdUser === null) {
    return res.status(404).send("User not found");
  } else if (createdUser.name === name && createdUser.role === role || !name && !role) {
    return res.status(400).send("Missing required or new data");
  } else {
    return Users.update({
      name: name,
      role: role
    }, {
      where: {
        id: userId
      }
    }).then((user) => {
      return res.status(200).send(user);
    })
  }

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}