function searchLeft(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const pointer = start + Math.floor((end - start) / 2);

    if (nums[pointer] === target && (pointer === start || nums[pointer - 1] < target)) {
      return pointer;
    } else if (nums[pointer] < target) {
      start = pointer + 1;
    } else {
      end = pointer - 1;
    }

  }
  return -1;
}

function searchRight(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const pointer = start + Math.floor((end - start) / 2);
    if (nums[pointer] === target && (pointer === end || nums[pointer + 1] > target)) {
      return pointer;
    }
    if (nums[pointer] > target) {
      end = pointer - 1;
    } else {
      start = pointer + 1;
    }
  }
  return -1;
}

const searchRange = function (nums, target) {
  return [searchLeft(nums, target), searchRight(nums, target)];
};

module.exports = searchRange;