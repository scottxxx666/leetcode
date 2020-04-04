module.exports = (nums) => {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer++] = nums[i];
    }
  }
  while (pointer < nums.length) {
    nums[pointer++] = 0;
  }
};
