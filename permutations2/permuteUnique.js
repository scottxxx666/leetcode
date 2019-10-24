function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function permutation(nums, solutions, start) {
  if (start === nums.length - 1) {
    solutions.push([...nums]);
    return;
  }
  for (let i = start; i < nums.length; i++) {
    if (i !== start && nums[start] === nums[i]) {
      continue;
    }
    swap(nums, start, i);
    permutation([...nums], solutions, start + 1);
  }
}

module.exports = function (nums) {
  const result = [];
  permutation(nums.sort((a, b) => a - b), result, 0);
  return result;
};
