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

const createUser = (req, res) => {
  const searchUser = Users.create({
    content: req.body.name,
    todoId: req.params.todoId
  })
  console.log(searchUser)
    // .then(todoItem => res.status(201).send(todoItem))
    // .catch(error => res.status(400).send(error));
}

const updateUser = (req, res) => {
  res.send('atualizar usuário aqui');
}

const deleteUser = (req, res) => {
  res.send('deletar usuário aqui');
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}