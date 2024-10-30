const User = require("../models/Users");

const getAll = async (req, res) => {
  try {
    const result = await User.find();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    handleError(error);
  }
};

const getOne = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
    return await res;
  } catch (error) {
    // console.log(error);
    handleError(error);
  }
};

const insertUser = async (req, res) => {
  const { _id, firstName, lastName, email, level } = req.body;
  try {
    // const response = await users.insertMany(newUser);
    const newUser = new User({ _id, firstName, lastName, email, level });
    await newUser.save();
    res.send("new user saved");
    // res.status(201).json(response);
    // return res;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongo;
};

const deleteContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const response = await mongo;
};

module.exports = {
  getAll,
  getOne,
  insertUser,
  updateContact,
  deleteContact,
};
