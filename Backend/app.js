const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
dotenv.config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

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

app.use( 
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
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
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    res.status(400).send("User Not Found");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accesstoken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN, { expiresIn: "1m" });
      const refreshtoken = jwt.sign({userId: user._id}, process.env.REFRESH_TOKEN, { expiresIn: "10m" });

      res.cookie("accesstoken", accesstoken, {httpOnly: true});
      res.cookie("refreshtoken", refreshtoken, {httpOnly: true});

      res.status(200).json({ success: true, message: "Log in Successful" });
    } else {
      res.status(401).json({ success: false, message: "Log in Unsuccessful" });
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
