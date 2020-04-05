module.exports = function (prices) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > min) {
      sum += prices[i] - min;
    }
    min = prices[i];
  }
  return sum;
};
