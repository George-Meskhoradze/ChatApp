const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = 3000;
const mongoURL = process.env.mongoURL;

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    collection: "UserModels",
  }
);

const userModel = mongoose.model("UserModels", User);

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", async (req, res) => {
  const user = userModel.findOne({ email: req.body.email });

  if (user == null) {
    res.status(400).send("User Not Found");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("success");
    } else {
      res.send("unsuccess")
    }
  } catch (err) {
    res.json(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const { name, surname, email } = req.body;
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.json(`User Alredy Exist`);
    } else {
      const newUser = await userModel.create({
        name: name,
        surname: surname,
        email: email,
        password: hashPassword,
      });
      res.json(`Account Created`);
    }
  } catch (err) {
    return res.json(err);
  }
});
