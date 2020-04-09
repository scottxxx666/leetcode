module.exports = function (nums) {
  const result = [];
  for (let num of nums) {
    const key = Math.abs(num) - 1;
    if (nums[key] > 0) {
      nums[key] = -nums[key];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};
