const CartModel = require("../models/cartModel");

exports.createCart = async (req, res) => {
  const newCart = new CartModel(req.body);

  try {
    const savedCart = await newCart.save();

    res.status(200).json({
      status: "success",
      message: "New Cart created",
      data: {
        cart: savedCart,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: fail,
      message: err.message,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      status: "success",
      message: "Cart updated.",
      data: {
        cart: updatedCart,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await CartModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Cart has been deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUserCart = async (req, res) => {
  try {
    const user = await CartModel.findOne({ userId: req.params.userId });
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
