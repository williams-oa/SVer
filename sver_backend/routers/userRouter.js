const express = require("express");
const tokenVerification = require("../controllers/tokenVerification");
const userControllers = require("../controllers/userControllers");

const router = express.Router();

router
  .route("/")
  .get(tokenVerification.verifyTokenAndAdmin, userControllers.getAllUsers);

router
  .route("/stats")
  .get(tokenVerification.verifyTokenAndAdmin, userControllers.getStats);

router
  .route("/:id")
  .put(
    tokenVerification.verifyTokenAndAuthorization,
    userControllers.updateUser
  )
  .delete(
    tokenVerification.verifyTokenAndAuthorization,
    userControllers.deleteUser
  )
  .get(tokenVerification.verifyTokenAndAdmin, userControllers.getUser);

module.exports = router;
