const checkPossibility = function (nums) {
  if (nums.length <= 2) {
    return true;
  }
  let last = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < last) {
      count++;
      if (i <= 1 || nums[i] >= nums[i - 2]) {
        last = nums[i];
      } else {
        last = nums[i - 1];
      }
    } else {
      last = nums[i];
    }
  }
  return count <= 1;
};

module.exports = checkPossibility