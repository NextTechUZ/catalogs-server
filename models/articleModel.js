const { default: mongoose } = require("mongoose");

const articleSchema = new mongoose.Schema({
  titleUz: {
    type: String,
    required: [true, "Article title is required"],
    unique: [true, "Article title must be unique"],
  },
  bodyUz: {
    type: String,
    required: [true, "Article body is required"],
  },
  titleRu: {
    type: String,
    required: [true, "Article title is required"],
    unique: [true, "Article title must be unique"],
  },
  bodyRu: {
    type: String,
    required: [true, "Article body is required"],
  },
  image: {
    type: String,
    required: [true, "Article image is required"],
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
