module.exports = function (prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;
};
