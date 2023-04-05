const { default: mongoose } = require("mongoose");

const articleSchema = new mongoose.Schema({
  titleUz: {
    type: String,
    required: [true, "Article title is required"],
    unique: [true, "Article title must be unique"],
  },
  titleRu: {
    type: String,
    required: [true, "Article title is required"],
    unique: [true, "Article title must be unique"],
  },

  body: {
    type: [
      {
        descriptionUz: String,
        descriptionRu: String,
        image: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Media",
        },
      },
    ],
    required: [true, "Article body is required"],
  },
  mainImage: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
    required: [true, "Article image is required"],
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
