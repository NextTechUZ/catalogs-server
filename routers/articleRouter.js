const express = require("express");
const {
  getAllarticles,
  createArticle,
  getArticle,
  deleteArticle,
  editArticle,
} = require("../controllers/articleController");
const { routeProtector } = require("../controllers/authController");
const { uploadMulti, uploadSingle } = require("../controllers/mediaController");

const articleRoutes = express.Router();

articleRoutes
  .route("/")
  .get(getAllarticles)
  .post(routeProtector, uploadSingle, createArticle);

articleRoutes
  .route("/:id")
  .get(getArticle)
  .delete(routeProtector, deleteArticle)
  .patch(routeProtector, uploadSingle, editArticle);

module.exports = articleRoutes;
