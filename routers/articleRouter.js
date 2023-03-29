const express = require("express");
const {
  getAllarticles,
  createArticle,
  getArticle,
  deleteArticle,
  editArticle,
} = require("../controllers/articleController");
const { uploadMulti, uploadSingle } = require("../controllers/mediaController");

const articleRoutes = express.Router();

articleRoutes.route("/").get(getAllarticles).post(uploadSingle, createArticle);

articleRoutes
  .route("/:id")
  .get(getArticle)
  .delete(deleteArticle)
  .patch(uploadSingle, editArticle);

module.exports = articleRoutes;
