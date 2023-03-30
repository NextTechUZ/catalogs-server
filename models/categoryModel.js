const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
  nameUz: { type: String, required: [true, "Name is required"], unique: true },
  nameRu: { type: String, required: [true, "Name is required"], unique: true },
  image: { type: String, required: [true, "Image is required"] },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
