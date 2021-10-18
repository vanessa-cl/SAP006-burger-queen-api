// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  res.send('todos os usuários aqui');
};

const getUser = (req, res) => {
  res.send('um único usuário aqui');
;}

const createUser = (req, res) => {
  res.send('criar usuário aqui');
}

const updateUser = (req, res) => {
  res.send('atualizar usuário aqui');
}

const deleteUser = (req, res) => {
  res.send('deletar usuário aqui');
}

const getAllProducts = (req, res) => {
  res.send('todos os produtos aqui');
}

const getProduct = (req, res) => {
  res.send('um único produto aqui');
}

const createProduct = (req, res) => {
  res.send('criar produtos aqui');
}

const updateProduct = (req, res) => {
  res.send('atualizar produtos aqui');
}

const deleteProduct = (req, res) => {
  res.send('deletar produto aqui');
}

const getAllOrders = (req, res) => {
  res.send('todos os pedidos aqui');
}

const getOrder = (req, res) => {
  res.send('um único pedido aqui');
}

const createOrder = (req, res) => {
  res.send('criar pedidos aqui');
}

const updateOrder = (req, res) => {
  res.send('atualizar pedidos aqui');
}

const deleteOrder = (req, res) => {
  res.send('deletar pedido aqui');
}

module.exports = { 
  getAllUsers, 
  getUser, 
  createUser, 
  updateUser,
  deleteUser,
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
