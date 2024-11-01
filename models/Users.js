const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user: {
      firstName: String,
      lastName: String,
      email: String,
      level: ["visitor", "admin1", "admin2"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
