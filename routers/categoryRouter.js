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
  .post(uploadSingle, createCategory);

categoryRoutes
  .route("/:id")
  .get(getCategory)
  .patch(uploadSingle, editCategory)
  .delete(deleteCategory);

module.exports = categoryRoutes;
