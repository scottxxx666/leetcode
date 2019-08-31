function permutations(result, solution, nums) {
  for (let i = 0; i < nums.length; i++) {
    solution.push(nums[i]);
    if (nums.length === 1) {
      result.push([...solution]);
    } else {
      permutations(result, solution, nums.filter(e => e !== nums[i]));
    }
    solution.pop();
  }
}

function permute(nums) {
  let result = [];
  permutations(result, [], nums);
  return result;
}

module.exports = permute;
