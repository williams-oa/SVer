const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: Number,
      default: null,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const VendorModel = mongoose.model("VendorModel", VendorSchema);

module.exports = VendorModel;
