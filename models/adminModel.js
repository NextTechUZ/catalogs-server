const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Username must be unique"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Password is required"],
  },
  passwordChangedAt: Date,
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    this.passwordChangedAt = new Date();
    return next();
  }
  console.log(this);

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

adminSchema.pre("findOneAndUpdate", function (next) {
  // Check if the password has been modified
  if (!this._update.password) {
    return next();
  }

  // Hash the password
  bcrypt.hash(this._update.password, 12, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    this._update.password = hashedPassword;
    next();
  });
});

adminSchema.methods.comparePasswords = async function (loginPassword) {
  return await bcrypt.compare(loginPassword, this.password);
};
``;
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
