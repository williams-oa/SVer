const mongoose = require("mongoose");
const getCoinPrice = require("../cryptoCompare");

const ProductSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    Symbol: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.pre("save", async function (next) {
  try {
    if (!this.isNew || this.price !== null) {
      return next();
    }

    const symbol = this.Symbol;
    const price = await getCoinPrice(symbol);
    if (price !== null) {
      this.price = price;
    }

    next();
  } catch (error) {
    next(error);
  }
});

const ProductModel = mongoose.model("ProductModel", ProductSchema);

module.exports = ProductModel;
