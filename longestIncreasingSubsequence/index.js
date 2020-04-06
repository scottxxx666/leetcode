module.exports = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  const dp = new Array(nums.length + 1).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i + 1] = Math.max(dp[i + 1], dp[j + 1] + 1);
      }
    }
  }
  return Math.max(...dp);
};
