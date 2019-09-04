function canJump(nums) {
  let lastPosition = Number.NEGATIVE_INFINITY;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPosition) {
      lastPosition = i;
    }
  }
  return lastPosition === 0;
}

module.exports = canJump;
