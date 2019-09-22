productExceptSelf = function (nums) {
  const result = new Array(nums.length);
  result[result.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = result[i + 1] * nums[i + 1];
  }
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * left;
    left *= nums[i];
  }
  return result;
};

module.exports = productExceptSelf;
