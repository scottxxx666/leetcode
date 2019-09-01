function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const key = Math.floor((start + end) / 2);
    let pointer = nums[key];
    if (pointer === target) {
      return key;
    }
    if ((pointer < nums[0]) !== (target < nums[0])) {
      pointer = target > nums[0] ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    }
   
    if (pointer > target) {
      end = key - 1;
    } else {
      start = key + 1;
    }
  }
  return -1;
}

module.exports = search;
