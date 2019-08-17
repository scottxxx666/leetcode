const checkPossibility = function (nums) {
  let desc = null;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (desc !== null) {
        return false;
      }
      desc = i;
    }
  }
  return desc <= 1 || nums[desc] >= nums[desc - 2] || desc >= nums.length - 1 || nums[desc + 1] >= nums[desc - 1];
};

module.exports = checkPossibility