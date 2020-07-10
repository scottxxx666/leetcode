const firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] < nums.length && nums[i] - 1 !== i && nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    } else {
      i++;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
