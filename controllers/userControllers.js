const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");

exports.getAllusers = async (req, res) => {
  try {
    const usersQuery = new APIFeatures(User.find(), req.query)
      .sort()
      .filter()
      .paginate()
      .limitFields();

    sendSucces(res, { users: await usersQuery.query }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    sendSucces(res, { user }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.edituser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.params);
    sendSucces(res, { user }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createuser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    sendSucces(res, { user }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
