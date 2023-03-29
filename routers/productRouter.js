const express = require("express");
const { uploadMulti } = require("../controllers/mediaController");
// const { createProduct } = require("../controllers/productController");

const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.route("/").get(getAllProducts).post(uploadMulti, createProduct);

productRoutes
  .route("/:id")
  .get(getProduct)
  .delete(deleteProduct)
  .patch(uploadMulti, editProduct);

module.exports = productRoutes;
