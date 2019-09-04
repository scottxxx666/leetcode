function canJump(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      return true;
    }
    if (nums[i] === 0 && max <= 0) {
      return false;
    }
    if (nums[i] > max) {
      max = nums[i];
    }
    max--;
  }
}

module.exports = canJump;
