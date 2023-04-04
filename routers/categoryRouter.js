const express = require("express");
const {} = require("../controllers/authController");
const {
  getAllCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const categoryRoutes = express.Router();

categoryRoutes.route("/").get(getAllCategories).post(createCategory);

categoryRoutes
  .route("/:id")
  .get(getCategory)
  .patch(editCategory)
  .delete(deleteCategory);

module.exports = categoryRoutes;
