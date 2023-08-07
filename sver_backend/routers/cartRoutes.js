const express = require("express");
const cartController = require("../controllers/cartController");
const tokenVerification = require("../controllers/tokenVerification");

const router = express.Router();

router
  .route("/")
  .post(tokenVerification.verifyToken, cartController.createCart);

router
  .route("/:id")
  .put(tokenVerification.verifyTokenAndAuthorization, cartController.updateCart)
  .delete(
    tokenVerification.verifyTokenAndAuthorization,
    cartController.deleteCart
  );

router
  .route("/find/:UserId")
  .get(
    tokenVerification.verifyTokenAndAuthorization,
    cartController.getUserCart
  );

module.exports = router;
