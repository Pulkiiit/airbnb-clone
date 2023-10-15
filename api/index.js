const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret =
  "nG8D#%-FpF+AK7b5b|tgy}B:UMzL/%&Y5>)?1c=@O 4,R!L!(?e8Lfvv`MNO#4Fs";

app.listen(4000);

//middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());

//database
mongoose
  .connect(process.env.DATABASE_URI)
  .then(console.log("Databse connected"));

//routes
app.get("/test", (req, res) => {
  res.json("ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //creating user in database
    const createdUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(createdUser);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //finding user
  const foundUser = await User.findOne({ email });
  if (foundUser) {
    //checking is password is correct
    const passOk = bcrypt.compareSync(password, foundUser.password);
    if (passOk) {
      //sending jwt
      jwt.sign(
        { email: foundUser.email, id: foundUser._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          } else {
            res
              .cookie("token", token, { secure: true, sameSite: "none" })
              .json(foundUser);
          }
        }
      );
    } else {
      res.status(422).json("Incorrect Password");
    }
  } else {
    res.json("Not Found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, user) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(user.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

//Qwerty!2345
