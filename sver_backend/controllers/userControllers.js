const crypto = require("crypto-js");
const UserModel = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const query = req.query.new;
  console.log(query);
  const users = query
    ? await UserModel.find().sort({ createdAt: -1 }).limit(5)
    : await UserModel.find();
  res.status(200).json({
    status: "success",
    message: "GET ALL USERS",
    data: {
      users,
    },
  });
};

exports.updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = crypto.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await UserModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User has been deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear - 1));

  try {
    const data = await UserModel.aggregate([
      {
        $match: {
          createdAt: { $gte: lastYear },
        },
      },
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
