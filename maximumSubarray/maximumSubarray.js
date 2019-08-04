function maxSub(max, nums) {
  const current = nums.shift();
  const currentMax = Math.max(max, current);
  if (nums.length === 0) {
    return currentMax;
  }
  if (current > 0) {
    nums[0] += current;
  }
  return maxSub(currentMax, nums)
}

function maxSubArray(nums) {
  return maxSub(Number.NEGATIVE_INFINITY, nums);
}

module.exports = maxSubArray;
