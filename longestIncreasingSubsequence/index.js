function dfs(nums, index, prevIndex, dp) {
  if (index >= nums.length) {
    return 0;
  }
  if (dp[index + 1][prevIndex + 1] > 0) {
    return dp[index + 1][prevIndex + 1];
  }
  let has = 0;
  let prev = prevIndex >= 0 ? nums[prevIndex] : Number.MIN_SAFE_INTEGER;
  if (nums[index] > prev) {
    has = dfs(nums, index + 1, index, dp) + 1;
  }
  const not = dfs(nums, index + 1, prevIndex, dp);
  let result = Math.max(has, not);
  dp[index + 1][prevIndex + 1] = result;
  return result;
}

module.exports = (nums) => {
  const dp = [];
  for (let i = 0; i <= nums.length; i++) {
    dp.push(new Array(nums.length + 1).fill(0));
  }
  return dfs(nums, 0, -1, dp);
};
