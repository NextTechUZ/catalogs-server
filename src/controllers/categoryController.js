const Category = require("../models/categoryModel");
const fs = require("fs");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");
const Media = require("../models/mediaModel");

exports.getAllCategories = async (req, res) => {
  try {
    const categoryQuery = new APIFeatures(
      Category.find().populate({
        path: "image",
        select: "name",
      }),
      req.query
    )
      .sort()
      .filter()
      .paginate()
      .limitFields();
    const categories = await categoryQuery.query;
    sendSucces(res, { result: categories.length, categories }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate({
      path: "image",
      select: ["name", "location"],
    });

    sendSucces(res, { category }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    console.log(category.image);
    const media = await Media.findByIdAndDelete(category.image);

    fs.unlink("./img/" + media?.name, (err) => console.log(err));

    sendSucces(res, { category }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    sendSucces(res, { category }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.editCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    sendSucces(res, { category }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
