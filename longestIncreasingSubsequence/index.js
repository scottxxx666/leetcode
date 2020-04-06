function dfs(nums, index, prev, count) {
  if (index > nums.length) {
    return count;
  }
  let has = 0;
  if (nums[index] > prev) {
    has = dfs(nums, index + 1, nums[index], count + 1);
  }
  const not = dfs(nums, index + 1, prev, count);
  return Math.max(has, not);
}

module.exports = (nums) => {
  return dfs(nums, 0, Number.MIN_SAFE_INTEGER, 0);
};
