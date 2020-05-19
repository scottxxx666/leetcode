const StockSpanner = function () {
  this.prices = [];
  this.spans = [];
};

StockSpanner.prototype.next = function (price) {
  let result = 1;
  while (this.prices.length > 0 && price >= this.prices[this.prices.length - 1]) {
    this.prices.pop();
    result += this.spans.pop();
  }
  this.prices.push(price);
  this.spans.push(result);
  return result;
};

module.exports = StockSpanner;
