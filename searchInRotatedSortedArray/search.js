function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const key = Math.floor((start + end) / 2);
    const pointer = nums[key];
    if (pointer === target) {
      return key;
    }
    if (pointer >= nums[start]) {
      if (target > pointer) {
        start = key + 1;
      } else if (target < nums[start]) {
        start = key + 1;
      } else {
        end = key - 1;
      }
    } else {
      if (target < pointer) {
        end = key - 1;
      } else if (target > nums[end]) {
        end = key - 1;
      } else {
        start = key + 1;
      }
    }
  }
  return -1;
}

module.exports = search;
