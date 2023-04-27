const { default: mongoose } = require("mongoose");

const mediaSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Media name is required"] },
  location: String,
});

const Media = mongoose.model("Media", mediaSchema);
module.exports = Media;
