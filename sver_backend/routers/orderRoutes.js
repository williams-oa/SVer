const express = require("express");
const orderController = require("../controllers/orderController");
const tokenVerification = require("../controllers/tokenVerification");

const router = express.Router();

router
  .route("/")
  .post(tokenVerification.verifyToken, orderController.createOrder);

router
  .route("/:id")
  .put(tokenVerification.verifyTokenAndAdmin, orderController.updateOrder)
  .delete(tokenVerification.verifyTokenAndAdmin, orderController.deleteOrder);

router
  .route("/find/:UserId")
  .get(
    tokenVerification.verifyTokenAndAuthorization,
    orderController.getUserOrder
  );

module.exports = router;
