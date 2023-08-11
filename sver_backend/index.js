const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/auth");
const productRouter = require("./routers/productRoutes");
const cartRouter = require("./routers/cartRoutes");
const vendorRouter = require("./routers/vendorRouter");
const { json } = require("body-parser");
const cron = require("node-cron");
const updateTokenPrices = require("./updateTokenPrices");
const cors = require("cors");
// const bodyParser = require("body-parser");

dotenv.config();
const app = express();

//body parser
app.use(json());
app.use(cors());
// app.use(bodyParser.json);

mongoose
  .connect(
    `mongodb+srv://royaabir45:${process.env.MONGO_PASSWORD}@cluster0.arhvglg.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1.0.0/user", userRouter);
app.use("/api/v1.0.0/auth", authRouter);
app.use("/api/v1.0.0/product", productRouter);
app.use("/api/v1.0.0/cart", cartRouter);
app.use("/api/v1.0.0/vendor", vendorRouter);

// Define the cron job for updating coin prices
cron.schedule("0 * * * *", () => {
  updateCoinPrices(); // Call the background worker function
});

app.listen(process.env.PORT || 5500, () => {
  console.log(
    `SVER backend server runnning on port ${process.env.PORT || 5500}`
  );
});
