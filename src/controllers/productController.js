const APIFeatures = require("../utils/apiFeatures");
const fs = require("fs");
const { sendError, sendSucces } = require("../utils/sendData");
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const productsQuery = new APIFeatures(
      Product.find().populate([
        {
          path: "images",
          select: "name",
        },
        {
          path: "category",
          select: ["nameUz", "nameRu"],
        },
      ]),
      req.query
    )
      .sort()
      .filter()
      .paginate()
      .limitFields();

    const products = await productsQuery.query;

    sendSucces(res, { result: products.length, products }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate({
      path: "images",
      select: "name",
    });

    sendSucces(res, { product }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    sendSucces(res, { product }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    sendSucces(res, { product }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    sendSucces(res, { product }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
