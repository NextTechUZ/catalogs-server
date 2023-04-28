const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  images: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
    required: [true, "Image is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
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

  created: {
    type: Date,
  },
});

productSchema.pre("save", function (next) {
  const currentDate = new Date();
  this.created = currentDate;
  next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
