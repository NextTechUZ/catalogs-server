const express = require("express");

const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.route("/").get(getAllProducts).post(createProduct);

productRoutes
  .route("/:id")
  .get(getProduct)
  .delete(deleteProduct)
  .patch(editProduct);

module.exports = productRoutes;
