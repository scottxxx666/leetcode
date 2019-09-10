function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function sortColors(nums) {
  let firstOne = 0;
  let lastOne = nums.length - 1;
  for (let i = 0; i <= lastOne; i++) {
    if (nums[i] < 1) {
      swap(nums, firstOne, i);
      firstOne++;
    } else if (nums[i] > 1) {
      swap(nums, lastOne, i);
      lastOne--;
      i--;
    }
  }
}

module.exports = sortColors;
