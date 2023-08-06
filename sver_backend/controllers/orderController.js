const OrderModel = require("../models/orderModel");
const express = require("express");

exports.createOrder = async (req, res) => {
  const newOrder = new OrderModel(req.body);

  try {
    const savedOrder = await newOrder.save();

    res.status(200).json({
      status: "success",
      message: "New Order created",
      data: {
        cart: savedOrder,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: fail,
      message: err.message,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
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
      message: "Order updated.",
      data: {
        cart: updatedOrder,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await OrderModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Order has been deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUserOrder = async (req, res) => {
  try {
    const user = await OrderModel.find({ userId: req.params.userId });
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
