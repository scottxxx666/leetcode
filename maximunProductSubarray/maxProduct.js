maxProduct = function (nums) {
  let max = nums[0];
  let localMax = nums[0];
  let localMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const temp = Math.max(localMax * nums[i], localMin * nums[i], nums[i]);
    localMin = Math.min(localMax * nums[i], localMin * nums[i], nums[i]);
    localMax = temp;
    max = Math.max(max, localMax, localMin);
  }
  return max;
};

module.exports = maxProduct;
