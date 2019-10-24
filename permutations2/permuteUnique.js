function permutation(nums, solutions, solution) {
  if (nums.length === 0) {
    solutions.push([...solution]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = nums[i];
    solution.push(target);
    nums.splice(i, 1);
    permutation(nums, solutions, solution);
    solution.pop();
    nums.splice(i, 0, target);
  }
}

module.exports = function (nums) {
  const solution = [];
  const result = [];
  permutation(nums.sort((a, b) => a - b), result, solution);
  return result;
};
