const express = require("express");
const { routeProtector } = require("../controllers/authController");
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

productRoutes
  .route("/")
  .get(getAllProducts)
  .post(routeProtector, uploadMulti, createProduct);

productRoutes
  .route("/:id")
  .get(getProduct)
  .delete(routeProtector, deleteProduct)
  .patch(routeProtector, uploadMulti, editProduct);

module.exports = productRoutes;
