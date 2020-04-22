module.exports = (nums, k) => {
  const dp = new Array(nums.length + 1).fill(null);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(nums.length + 1).fill(0);
  }

  let result = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === j) {
        dp[i][j] = nums[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j] + nums[i - 1];
      }

      if (dp[i][j] === k) {
        result++;
      }
    }
  }
  return result;
};
