const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const { Schema } = mongoose;
const cors = require("cors");
dotenv.config();

const PORT = 3000;
const mongoURL = process.env.mongoURL;

const User = new Schema(
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

app.get("/getUser", async (req, res) => {
  try {
    const response = await userModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.json("User Alredy Exist");
    } else {
      const newUser = await userModel.create({
        name: name,
        surname: surname,
        email: email,
        password: password,
      });
      res.json("Account Created");
    }
  } catch (err) {
    return res.json(err);
  }
});
