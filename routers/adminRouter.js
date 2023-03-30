const express = require("express");
const { login, routeProtector } = require("../controllers/authController");
const {
  getAllAdmins,
  createAdmin,
  deleteAdmin,
  editAdmin,
  getAdmin,
} = require("../controllers/adminControllers");

const adminRoutes = express.Router();

adminRoutes.route("/login").post(login);

adminRoutes.route("/").get(routeProtector, getAllAdmins).post(createAdmin);
adminRoutes
  .route("/:id")
  .get(routeProtector, getAdmin)
  .delete(routeProtector, deleteAdmin)
  .patch(routeProtector, editAdmin);

module.exports = adminRoutes;
