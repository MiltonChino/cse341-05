const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    level: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
