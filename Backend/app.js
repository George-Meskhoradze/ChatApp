const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const { Schema } = mongoose;
const cors = require("cors");
dotenv.config();

const PORT = 3000; 
const mongoURL = process.env.mongoURL;
 
const User = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("UserModels", User, "UserModels");

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

app.post("/CreateUser", async (req, res) => {
  try {
    const user = req.body;
    const userNew = new userModel(user);
    const userCreated = await userNew.save();
    res.json(userCreated);
  } catch (err) {
    res.json(err);
  }
});
