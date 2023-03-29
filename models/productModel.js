const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  images: { type: [String], required: [true, "Image is required"] },
  categpry: { type: Schema.Types.ObjectId, ref: "Category" },
  aboutUz: [
    {
      variable: String,
      value: String,
    },
  ],
  aboutRu: [
    {
      variable: String,
      value: String,
    },
  ],
  titleRu: {
    type: String,
    required: [true, "titleRu is required"],
    unique: true,
  },
  titleUz: {
    type: String,
    required: [true, "titleUz is required"],
    unique: true,
  },
  descriptionRu: String,
  descriptionUz: String,
});

// const t = {
//   images: string[],
//   titleRu: string,
//   titleUz: string,
//   descriptionRu: string,
//   descriptionUz: string,
//   aboutUz:string
//   aboutRu:string
// };

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
