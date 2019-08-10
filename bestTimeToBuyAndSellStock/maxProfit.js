module.exports = function (prices) {
  let minBefore = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minBefore) {
      minBefore = prices[i];
    }
    if (prices[i] - minBefore > max) {
      max = prices[i] - minBefore;
    }
  }
  return max;
};
