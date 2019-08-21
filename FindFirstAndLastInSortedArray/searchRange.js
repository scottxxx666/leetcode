function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const pointer = start + Math.floor((end - start) / 2);
    if (nums[pointer] > target) {
      end = pointer - 1;
    } else {
      start = pointer + 1;
    }
  }
  return start;
}

const searchRange = function (nums, target) {
  const left = search(nums, target - 0.5);
  const right = search(nums, target + 0.5) - 1;
  if (right < left) {
    return [-1, -1];
  }
  return [left, right];
};

module.exports = searchRange;