const Admin = require("../models/adminModel");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");

exports.getAllAdmins = async (req, res) => {
  try {
    const adminsQuery = new APIFeatures(Admin.find(), req.query)
      .sort()
      .filter()
      .paginate()
      .limitFields();

    sendSucces(res, { admins: await adminsQuery.query }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    sendSucces(res, { admin }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    sendSucces(res, { admin }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createAdmin = async (req, res) => {
  // console.log(req.file);
  try {
    const admin = await Admin.create(req.body);
    sendSucces(res, { admin }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.editAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body);
    sendSucces(res, { admin }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
