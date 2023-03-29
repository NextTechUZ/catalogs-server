const APIFeatures = require("../utils/apiFeatures");
const fs = require("fs");
const { sendError, sendSucces } = require("../utils/sendData");
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const productsQuery = new APIFeatures(Product.find(), req.query)
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
    const product = await Product.findById(req.params.id);

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
  const images = req.files.map((file) => file.filename);
  try {
    req.body.aboutRu = JSON.parse(req.body.aboutRu);
    req.body.aboutUz = JSON.parse(req.body.aboutUz);

    const product = await Product.create({
      ...req.body,
      ...(images[0] ? { images } : {}),
    });

    // images?.forEach((image) =>
    //   fs.unlink("./img/" + image, (err) => err && err && console.log(err))
    // );
    sendSucces(res, { product }, 200);
  } catch (error) {
    images?.forEach((image) =>
      fs.unlink("./img/" + image, (err) => err && console.log(err))
    );
    sendError(res, error.message, 404);
  }
};
exports.editProduct = async (req, res) => {
  const images = req.files.map((file) => file.filename);
  try {
    req.body.aboutRu = JSON.parse(req.body.aboutRu);
    req.body.aboutUz = JSON.parse(req.body.aboutUz);

    console.log(req.body, images);

    const product = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
      ...(images[0] ? { images } : {}),
    });
    images &&
      product.images.forEach((image) =>
        fs.unlink("./img/" + image, (err) => err && console.log(err))
      );

    sendSucces(res, { product }, 200);
  } catch (error) {
    images?.forEach((image) =>
      fs.unlink("./img/" + image, (err) => err && console.log(err))
    );
    sendError(res, error.message, 404);
  }
};
