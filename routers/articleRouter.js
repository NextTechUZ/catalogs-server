const express = require("express");
const {
  createArticle,
  getArticle,
  deleteArticle,
  editArticle,
  getAllArticles,
} = require("../controllers/articleController");
const { routeProtector } = require("../controllers/authController");
const { uploadMulti, uploadSingle } = require("../controllers/mediaController");

const articleRoutes = express.Router();

articleRoutes.route("/").get(getAllArticles).post(createArticle);

articleRoutes
  .route("/:id")
  .get(getArticle)
  .delete(deleteArticle)
  .patch(editArticle);

module.exports = articleRoutes;
