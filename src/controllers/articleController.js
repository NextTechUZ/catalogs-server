const APIFeatures = require("../utils/apiFeatures");
const fs = require("fs");
const { sendError, sendSucces } = require("../utils/sendData");
const Article = require("../models/articleModel");

exports.getAllArticles = async (req, res) => {
  try {
    const articlesQuery = new APIFeatures(
      Article.find().populate([
        {
          path: "body.image",
          select: ["name", "location"],
        },
        {
          path: "mainImage",
          select: ["name", "location"],
        },
      ]),
      req.query
    )

      .sort()
      .filter()
      .paginate()
      .limitFields();
    const articles = await articlesQuery.query;
    sendSucces(res, { result: articles.length, articles }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate([
      {
        path: "body.image",
        select: ["name", "location"],
      },
      {
        path: "mainImage",
        select: ["name", "location"],
      },
    ]);

    sendSucces(res, { article }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    sendSucces(res, { article }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);

    sendSucces(res, { article }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
exports.editArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body);

    sendSucces(res, { article }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};
