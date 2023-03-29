const express = require("express");
const { routeProtector } = require("../controllers/authController");
const {
  getAllCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { uploadSingle } = require("../controllers/mediaController");

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .get(getAllCategories)
  .post(routeProtector, uploadSingle, createCategory);

categoryRoutes
  .route("/:id")
  .get(getCategory)
  .patch(routeProtector, uploadSingle, editCategory)
  .delete(routeProtector, deleteCategory);

module.exports = categoryRoutes;
