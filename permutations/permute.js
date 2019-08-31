function permutations(result, solution, nums) {
  if (nums.length === 0) {
    result.push([...solution]);
  }
  for (let i = 0; i < nums.length; i++) {
    solution.push(nums[i]);
    permutations(result, solution, nums.filter(e => e !== nums[i]));
    solution.pop();
  }
}

function permute(nums) {
  let result = [];
  permutations(result, [], nums);
  return result;
}

module.exports = permute;
