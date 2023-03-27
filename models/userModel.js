const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, require: [true, "Name is required"] ,unique:[true,"Username must be unique"]},
    password: { type: String, require: [true, "Password is required"]  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
