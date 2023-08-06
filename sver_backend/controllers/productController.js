const ProductModel = require("../models/productModel");
const getCoinPrice = require("../cryptoCompare");

exports.createCoin = async (req, res) => {
  let newCoin = new ProductModel(req.body);

  try {
    // const symbol = req.body.Symbol;
    // const price = await getCoinPrice(symbol);
    // newCoin.price = price;
    const savedCoin = await newCoin.save();

    res.status(200).json({
      status: "success",
      message: "New Coin created.",
      data: {
        coin: savedCoin,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllCoins = async (req, res) => {
  const allCoins = await ProductModel.find();

  res.status(200).json({
    status: "success",
    data: {
      coins: allCoins,
    },
  });
};

exports.deleteCoin = async (req, res) => {
  try {
    await ProductModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Token has been deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
