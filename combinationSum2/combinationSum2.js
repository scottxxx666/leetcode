function findCombinations(nums, solution, target, result, start) {
  if (target === 0) {
    result.push([...solution]);
  }
  if (target < 0) {
    return;
  }
  for (let i = start; i < nums.length; i++) {
    solution.push(nums[i]);
    findCombinations(nums, solution, target - nums[i], result, i + 1);
    solution.pop();
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
}

module.exports = function (candidates, target) {
  const nums = candidates.sort((a, b) => a - b);
  const result = [];
  const solution = [];
  findCombinations(nums, solution, target, result, 0);
  return result;
};

