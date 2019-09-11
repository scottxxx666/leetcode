function nextSubsets(nums, result, subset, start) {
  result.push([...subset]);
  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]);
    nextSubsets(nums, result, subset, i + 1)
    subset.pop();
  }
}

function subsets(nums) {
  const result = [];
  const subset = [];
  nextSubsets(nums, result, subset, 0);
  return result;
}

module.exports = subsets;
