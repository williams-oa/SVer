const express = require("express");
const VendorController = require("../controllers/vendorController");

const router = express.Router();

router
  .route("/")
  .post(VendorController.createVendor)
  .get(VendorController.getAllVendors);

router
  .route("/:id")
  .delete(VendorController.deleteVendor)
  .get(VendorController.getVendor);

module.exports = router;
