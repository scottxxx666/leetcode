module.exports = function (prices) {
  let minBefore = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    prices[i] = price - minBefore;
    if (price < minBefore) {
      minBefore = price;
    }
  }
  return Math.max(0, ...prices);
};
