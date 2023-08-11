const VendorModel = require("../models/vendorModel");

exports.createVendor = async (req, res) => {
  let newVendor = new VendorModel(req.body);

  try {
    const savedVendor = await newVendor.save();

    res.status(200).json({
      status: "success",
      message: "New Vendor created.",
      data: {
        coin: savedVendor,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllVendors = async (req, res) => {
  const allVendors = await VendorModel.find();

  res.status(200).json({
    status: "success",
    data: {
      allVendors,
    },
  });
};

exports.getVendor = async (req, res) => {
  try {
    const user = await VendorModel.findById(req.params.id);
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

exports.deleteVendor = async (req, res) => {
  try {
    await VendorModel.findOneAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Vendor has been deleted.",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
