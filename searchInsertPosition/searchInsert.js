searchInsert = function (nums, target) {
  if (nums.length === 0) {
    return 0;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const pointer = Math.floor((start + end) / 2);
    if (nums[pointer] === target) {
      return pointer;
    }
    if (nums[pointer] > target) {
      end = pointer;
    } else {
      start = pointer + 1;
    }
  }
  if (nums[end] < target) {
    return end + 1;
  }
  return end;
};

module.exports = searchInsert;
