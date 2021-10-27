// aqui vai o código que acessa o banco de dados

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
