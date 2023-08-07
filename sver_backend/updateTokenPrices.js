const cron = require("node-cron");
const ProductModel = require("./models/productModel");
const getCoinPrice = require("./cryptoCompare");

// // Runs every hour
// cron.schedule("0 * * * *", async () => {
//   try {
//     const allCoins = await ProductModel.find();
//     for (const coin of allCoins) {
//       const symbol = coin.Symbol;
//       const price = await getCoinPrice(symbol);
//       if (price !== null) {
//         coin.price = price;
//         await coin.save();
//       }
//     }
//     console.log("Prices updated successfully.");
//   } catch (error) {
//     console.error("Error updating prices:", error);
//   }
// });

const updateCoinPrices = async () => {
  try {
    const allCoins = await ProductModel.find();
    for (const coin of allCoins) {
      const symbol = coin.Symbol;
      const price = await getCoinPrice(symbol);
      if (price !== null) {
        coin.price = price;
        await coin.save();
        console.log(
          `Price for ${coin.Name} (${coin.Symbol}) updated successfully.`
        );
      } else {
        console.log(
          `Failed to update price for ${coin.Name} (${coin.Symbol}).`
        );
      }
    }
  } catch (error) {
    console.error("Error updating prices:", error);
  }
};
