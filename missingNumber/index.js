const missingNumber = function (nums) {
  const shouldSum = (nums.length + 1) * nums.length / 2;
  const realSum = nums.reduce((p, c) => p + c, 0);
  return shouldSum - realSum;
};

module.exports = missingNumber;
