const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("users", contactsSchema);
