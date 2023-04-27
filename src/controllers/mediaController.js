const Media = require("../models/mediaModel");
const fs = require("fs");
const APIFeatures = require("../utils/apiFeatures");
const { sendError, sendSucces } = require("../utils/sendData");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Math.floor(Math.random() * 1000)}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  cb(null, true);
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadSingle = upload.single("media");
exports.uploadMulti = upload.array("media");

exports.getAllMedia = async (req, res) => {
  try {
    const mediaQuery = new APIFeatures(Media.find(), req.query)
      .sort()
      .filter()
      .paginate()
      .limitFields();
    const medias = await mediaQuery.query;
    sendSucces(res, { result: medias.length, medias }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    sendSucces(res, { media }, 200);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    fs.unlink("./img/" + media.name, (err) => console.log(err));

    sendSucces(res, { media }, 204);
  } catch (error) {
    sendError(res, error.message, 404);
  }
};

exports.createMedia = async (req, res) => {
  try {
    const medias = req.files.map((media) => {
      return { name: media.filename };
    });
    const media = await Media.insertMany(medias);
    sendSucces(res, { media }, 200);
  } catch (error) {
    req.file &&
      fs.unlink("./img/" + req.file.filename, (err) => console.log(err));
    sendError(res, error.message, 404);
  }
};

exports.editMedia = async (req, res) => {
  try {
    const imageName = req.file && req.file.filename;
    const media = await Media.findByIdAndUpdate(req.params.id, {
      name: imageName,
    });

    imageName && fs.unlink("./img/" + media.name, (err) => console.log(err));

    sendSucces(res, { media }, 200);
  } catch (error) {
    req.file &&
      fs.unlink("./img/" + req.file.filename, (err) => console.log(err));
    sendError(res, error.message, 404);
  }
};
