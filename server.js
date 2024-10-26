const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");

const connectDB = require("./connection/db");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

connectDB();

// app.get("/contacts", async (req, res) => {
//   try {
//     const result = await Contact.find();
//     result.toArray;
//     // const list = result.toArray();
//     // list.forEach((user) => {
//     //   console.log(user);
//     // });

//     result.then((lists) => {
//       res.setHeader("Content-Type", "application/json");
//       res.status(200).json(lists);
//       console.log(lists);
//     });

//     console.log(users);
//   } catch (error) {
//     console.log("get DB error");
//     console.log(error);
//   }
// });
