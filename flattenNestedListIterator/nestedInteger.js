function NestedInteger(nums) {
  this.nums = nums;
  this.pointer = 0;
};

NestedInteger.prototype.isInteger = function () {
  return !Array.isArray(this.nums);
};

NestedInteger.prototype.getInteger = function () {
  return this.isInteger() ? this.nums : null;
};

NestedInteger.prototype.getList = function () {
  return this.isInteger() ? null : this.nums;
};

module.exports = NestedInteger;
