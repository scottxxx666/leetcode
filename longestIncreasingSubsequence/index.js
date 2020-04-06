function dfs(nums, index, prev) {
  if (index > nums.length) {
    return 0;
  }
  let has = 0;
  if (nums[index] > prev) {
    has = dfs(nums, index + 1, nums[index]) + 1;
  }
  const not = dfs(nums, index + 1, prev);
  return Math.max(has, not);
}

module.exports = (nums) => {
  return dfs(nums, 0, Number.MIN_SAFE_INTEGER);
};
