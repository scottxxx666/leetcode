module.exports = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum >= 0 && (nums[i] >= 0 || sum + nums[i] > 0)) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = sum > max ? sum : max;
  }
  return max;
};
