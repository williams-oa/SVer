const cc = require("cryptocompare");
cc.setApiKey(
  "ba40100d329e6aa657b3ad3d06b4b705aa4fb4e56ff9e2de78778eb7459ce365"
);

// const price = cc
//   .priceFull(["BSV"], ["USD"])
//   .then((prices) => {
//     console.log(prices.BSV.USD.PRICE);
//   })
//   .catch(console.error);

// const getCoinPrice = async (symbol) => {
//   const price = await cc
//     .priceFull([symbol], ["USD"])
//     .then((prices) => {
//       console.log(prices[symbol].USD);
//       return prices;
//     })
//     .catch(console.error);
// };

const getCoinPrice = async (symbol) => {
  try {
    const prices = await cc.priceFull([symbol], ["USD"]);
    //   console.log(prices[symbol]); // Log the specific price data for debugging
    return prices[symbol].USD.PRICE;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// module.exports = price;
module.exports = getCoinPrice;
