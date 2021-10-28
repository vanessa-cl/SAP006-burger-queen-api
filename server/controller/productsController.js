const Products = require('../db/models').Products;

const getAllProducts = async (req, res) => {
  return Products.findAll()
  .then((products) => {
    res.status(200).send(products)
  });
};

const getProduct = async (req, res) => {
  const productId = req.params.productId
  const createdProduct = await Products.findOne({
    where: {
      id: productId
    }
  });

  if (!createdProduct) {
    return res.status(404).send({
      code: 404,
      message: "Not found"
    });
  } else {
    return res.status(200).send(createdProduct);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};