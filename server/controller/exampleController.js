// aqui vai o código que acessa o banco de dados

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
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
