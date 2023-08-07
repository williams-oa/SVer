const UserModel = require("../models/userModel");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const { accessSync } = require("fs");
const { fail } = require("assert");

exports.registerUser = async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: crypto.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  try {
    await newUser.save();
    const accessToken = jwt.sign(
      {
        id: newUser._id,
        isAdmin: newUser.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRESIN,
      }
    );
    res.status(201).json({
      status: "success",
      message: "NEW USER REGISTERED",
      data: {
        user: newUser,
        accessToken,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });

    !user &&
      res.status(401).json({
        status: "fail",
        message: "Invalid credentials. No such user.",
      });

    const hashedPassword = crypto.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const originalPassword = hashedPassword.toString(crypto.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json({
        status: "fail",
        message: "Invalid credentials. Wrong password.",
      });

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRESIN,
      }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({
      status: "success",
      data: {
        user: others,
        accessToken,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};
