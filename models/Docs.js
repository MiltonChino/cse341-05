const mongoose = require("mongoose");

const userSchema = mongoose.Schema({});

const docSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: Date,
    publishedAt: Date,
    updatedAt: Date,
    editedBy: user._id,
    link: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contacts", contactsSchema);
