const express = require("express");
const { routeProtector } = require("../controllers/authController");
const {
  uploadMulti,
  getAllMedia,
  createMedia,
  getMedia,
  editMedia,
  deleteMedia,
  uploadSingle,
} = require("../controllers/mediaController");

const mediaRoutes = express.Router();

mediaRoutes
  .route("/")
  .get(getAllMedia)
  .post(routeProtector, uploadMulti, createMedia);

mediaRoutes
  .route("/:id")
  .get(getMedia)
  .patch(routeProtector, uploadSingle, editMedia)
  .delete(routeProtector, deleteMedia);

module.exports = mediaRoutes;
