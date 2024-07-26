const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
//hashing the password and comparing it for login (npm i bcrypt)
const bcrypt = require("bcrypt");
//jwt
var jwt = require("jsonwebtoken");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

//creating the connection with the database
mongoose.connect(
  "mongodb+srv://zahra:zahra030702@cluster0.e6d8kvo.mongodb.net/authapp"
);
//create the modules for users and blogs
const User = mongoose.model("User", { username: String, password: String });
const Blog = mongoose.model("blog", { title: String, text: String });

app.get("/getusers", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(`Signup attempt: username=${username}`);

    const user = await User.findOne({ username });
    if (user) {
      console.log("User already exists");
      return res.status(409).send({ msg: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hash });
    await newUser.save();

    console.log("User created successfully");
    res.status(201).send({ msg: "User is created" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send({ msg: "An error occurred" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists
    const user = await User.findOne({ username });
    if (user) {
      // Compare the provided password with the hashed password directly
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ _id: user._id }, "zahra test" /* , {expiresIn : 60*60}*/);
        res.send({ token: token });
      } else {
        return res.status(401).send({ msg: "Wrong password" });
      }
    } else {
      return res.status(404).send({ msg: "Wrong username" });
    }
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).send({ msg: "An error occurred" });
  }
});

//getblogs
app.get("/getblogs", async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

//create blogs unless you are a connected user
//verify if he is a connected user => middleware that will verify if the token is correct

const verifyJwt = (req, res, next) => {
  //check the JWT by vrify
  //determins if the user is able to create or not
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const result = jwt.verify(token, "zahra test");
    if (!result) {
      return res.status(401).json({
        msg: "you are not authorized to acces this functionality ",
      });
    } else {
      next();
    }
  } else {
    return res.status(401).json({
      msg: "you are not authorized to acces this functionality ",
    });
  }
};

app.post("/blogs", verifyJwt, async (req, res) => {
  const blogs = await Blog.create(req.body);
  res.send(blogs);
});

//conncting to the server
app.listen(3000, () => {
  console.log("server is running successfully");
});
