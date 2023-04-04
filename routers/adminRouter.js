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

adminRoutes.route("/").get(getAllAdmins).post(createAdmin);
adminRoutes.route("/:id").get(getAdmin).delete(deleteAdmin).patch(editAdmin);

module.exports = adminRoutes;
