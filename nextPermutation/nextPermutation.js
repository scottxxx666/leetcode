function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function nextPermutation(nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        swap(nums, j, j + 1);
      } else {
        const bigger = nums[j + 1];
        for (let k = j; k >= i; k--) {
          nums[k + 1] = nums[k];
        }
        nums[i] = bigger;
        return;
      }
    }
  }
}

module.exports = nextPermutation;
