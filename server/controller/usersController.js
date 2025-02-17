const Users = require('../db/models').Users;

const getAllUsers = async (req, res) => {
  return Users.findAll()
    .then((users) => {
      res.status(200).send(users)
    });
};

const getUser = async (req, res) => {
  const userId = req.params.userId;
  const createdUser = await Users.findOne({
    where: {
      id: userId
    }
  });
  
  if (!createdUser) {
    return res.status(404).send({
      code: 404,
      message: "User not found"
    })
  } else {
    return res.status(200).send(createdUser)
  }
};

const createUser = async (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  const createdUser = await Users.findOne({
    where: {
      email: email
    }
  });

  if (!name || !email || !password || !role || !restaurant) {
    return res.status(400).send({
      code: 400,
      message: "Missing required data"
    });
  } else if (createdUser !== null) {
    return res.status(403).send({
      code: 403,
      message: "Email already in use"
    });
  } else {
    return await Users.create({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: restaurant
    }).then((user) => res.status(200).send(user))
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { name, role } = req.body;
  const createdUser = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (createdUser === null) {
    return res.status(404).send({
      code: 404,
      message: "User not found"
    });
  } else if (createdUser.name === name && createdUser.role === role || !name && !role) {
    return res.status(400).send({
      code: 400,
      message: "Missing required or new data"
    });
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
}

const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const createdUser = await Users.findOne({
    where: {
      id: userId
    }
  })

  if (createdUser === null) {
    return res.status(404).send({
      code: 404,
      message: "User not found"
    });
  } else {
    createdUser.destroy();
    return res.status(200).send(createdUser)
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}