function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const index = Math.floor((start + end) / 2);
    if (nums[index] === target) {
      return index;
    }
    if (nums[index] > target) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return start;
}

module.exports = (nums) => {
  const dp = [];
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    let index = binarySearch(dp, nums[i]);
    if (index > dp.length - 1) {
      dp.push(nums[i]);
      length++;
    } else {
      dp[index] = nums[i];
    }
  }
  return length;
};
