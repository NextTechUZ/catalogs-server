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

mediaRoutes.route("/").get(getAllMedia).post(uploadMulti, createMedia);

mediaRoutes
  .route("/:id")
  .get(getMedia)
  .patch(uploadSingle, editMedia)
  .delete(deleteMedia);

module.exports = mediaRoutes;
