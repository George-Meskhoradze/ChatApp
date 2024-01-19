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
  email: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
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

app.post("/register", (req, res) => {
  const [name,surname,email,password] = req.body
  userModel.findOne({email: email})
  .then(user => {
    if(user){ 
      res.json("Alredy Exist")
    } else {
      userModel.create({name: name,surname: surname,email: email, password: password})
      .then(result => res.json("Account Created"))
      .catch(err => res.json(err))
    }
  })
  .catch(err => res.json(err))
});
