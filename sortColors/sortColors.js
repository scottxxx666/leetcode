function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function sortColors(nums) {
  let firstOne = 0;
  let lastOne = nums.length - 1;
  let pointer = 0;
  while (pointer <= lastOne) {
    if (nums[pointer] < 1) {
      swap(nums, firstOne, pointer);
      firstOne++;
      pointer++;
    } else if (nums[pointer] > 1) {
      swap(nums, lastOne, pointer);
      lastOne--;
    } else {
      pointer++;
    }
  }
}

module.exports = sortColors;
