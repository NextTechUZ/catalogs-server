const express = require("express");
const { routeProtector } = require("../controllers/authController");
const {
  getAllOrders,
  deleteOrder,
  createOrder,
} = require("../controllers/orderController");

const orderRoutes = express.Router();

orderRoutes
  .route("/")
  .get(routeProtector, getAllOrders)
  .delete(routeProtector, deleteOrder)
  .post(createOrder);

orderRoutes.route("/:id").delete(routeProtector, deleteOrder);

module.exports = orderRoutes;
