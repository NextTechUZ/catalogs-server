const Category = require("../models/categoryModel");
const fs = require("fs");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");

exports.getAllCategories = async (req, res) => {
  try {
    const categoryQuery = new APIFeatures(Category.find(), req.query)
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
    const category = await Category.findById(req.params.id);

    sendSucces(res, { category }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    fs.unlink("./img/" + category.image, (err) => console.log(err));

    sendSucces(res, { category }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : undefined;
    const category = await Category.create({ ...req.body, image });
    sendSucces(res, { category }, 200);
  } catch (error) {
    req.file &&
      fs.unlink("./img/" + req.file.filename, (err) => console.log(err));
    sendError(res, error.message, 404);
  }
};

exports.editCategory = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : undefined;

    const category = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      image,
    });
    image && fs.unlink("./img/" + category.image, (err) => console.log(err));

    sendSucces(res, { category }, 200);
  } catch (error) {
    req.file &&
      fs.unlink("./img/" + req.file.filename, (err) => console.log(err));
    sendError(res, error.message, 404);
  }
};
