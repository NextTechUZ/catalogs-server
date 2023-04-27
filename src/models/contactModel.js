const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
  instagram:String,
  telegram:[String],
  phone:[String],
  email:[String],
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
