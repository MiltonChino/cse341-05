const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String,
});

module.exports = mongoose.model("Contacts", contactsSchema);
