productExceptSelf = function (nums) {
  const result = new Array(nums.length);
  result[result.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = result[i + 1] * nums[i + 1];
  }
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] * nums[i];
    result[i] = result[i] * nums[i - 1];
  }
  return result;
};

module.exports = productExceptSelf;
