module.exports = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const temp = Math.floor((left + right) / 4) * 2;
    if (nums[temp] === nums[temp + 1]) {
      left = temp + 2;
    } else {
      right = temp;
    }
  }
  return nums[right];
};
