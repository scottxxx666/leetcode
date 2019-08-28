function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function reverse(nums, start) {
  for (let k = 0; start + k < nums.length - k; k++) {
    swap(nums, start + k, nums.length - k - 1);
  }
}

function nextPermutation(nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let j = i + 1;
      while (j < nums.length && nums[j] > nums[i]) {
        j++;
      }
      swap(nums, i, j - 1);
      reverse(nums, i + 1);
      return;
    }
  }
  reverse(nums, 0);
}

module.exports = nextPermutation;
