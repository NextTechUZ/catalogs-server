const express = require("express");

const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");
const { routeProtector } = require("../controllers/authController");

const productRoutes = express.Router();

productRoutes
  .route("/")
  .get(getAllProducts)
  .post(routeProtector, createProduct);

productRoutes
  .route("/:id")
  .get(getProduct)
  .delete(routeProtector, deleteProduct)
  .patch(routeProtector, editProduct);

module.exports = productRoutes;
