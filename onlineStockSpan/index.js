const StockSpanner = function () {
  this.prices = [];
  this.start = 0;
};

StockSpanner.prototype.next = function (price) {
  this.prices.push(price);
  const length = this.prices.length;
  if (length >= 2 && this.prices[length - 2] > this.prices[length - 1]) {
    this.start = length - 1;
  }
  while (this.start >= 0 && this.prices[this.start] > price) {
    this.start++;
  }
  while (this.start >= 0 && this.prices[this.start] <= price) {
    this.start--;
  }
  return this.prices.length - this.start - 1;
};

module.exports = StockSpanner;
