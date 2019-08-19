const MinStack = function () {
  this.stack = [];
  this.min = [];
};

MinStack.prototype.push = function (x) {
  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
    this.min.push(x);
  }
  this.stack.push(x);
};

MinStack.prototype.pop = function () {
  const pop = this.stack.pop();
  if (pop === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  return pop;
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

module.exports = MinStack;