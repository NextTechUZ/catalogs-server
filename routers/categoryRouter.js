const express = require("express");
const { routeProtector } = require("../controllers/authController");
const {
  getAllCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .get(getAllCategories)
  .post(routeProtector, createCategory);

categoryRoutes
  .route("/:id")
  .get(getCategory)
  .patch(routeProtector, editCategory)
  .delete(routeProtector, deleteCategory);

module.exports = categoryRoutes;
