module.exports = (nums, k) => {
  let result = 0;
  for (let i = 1; i <= nums.length; i++) {
    const dp = new Array(nums.length + 1).fill(0);
    for (let j = i; j <= nums.length; j++) {
      dp[j] = dp[j - 1] + nums[j - 1];
      if (dp[j] === k) {
        result++;
      }
    }
  }
  return result;
};
