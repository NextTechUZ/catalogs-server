const Order = require("../models/orderModel");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");

exports.getAllOrders = async (req, res) => {
  try {
    const ordersQuery = new APIFeatures(Order.find(), req.query)
      .sort()
      .filter()
      .paginate()
      .limitFields();

    sendSucces(res, { orders: await ordersQuery.query }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    sendSucces(res, { order }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    sendSucces(res, { order }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
