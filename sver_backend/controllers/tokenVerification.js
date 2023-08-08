const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      
      if (err) {
        return res.status(401).json({
          status: "fail",
          message: "Invalid token",
        });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      status: "fail",
      message: "Not Authorised. Please login.",
    });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json({
        status: "fail",
        message: "You don't have permission to perform this action.",
      });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(401).json({
        status: "fail",
        message: "You don't have permission to perform this action.",
      });
    }
  });
};

module.exports = {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
};
