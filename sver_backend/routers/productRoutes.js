const express = require("express");
const tokenVerification = require("../controllers/tokenVerification");
const productController = require("../controllers/productController");

const router = express.Router();

router
  .route("/")
  .post(tokenVerification.verifyTokenAndAdmin, productController.createCoin)
  .get(productController.getAllCoins);

router
  .route("/:id")
  .get(tokenVerification.verifyTokenAndAdmin, productController.deleteCoin);

module.exports = router;
