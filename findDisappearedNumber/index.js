module.exports = function (nums) {
  const result = new Array(nums.length).fill(1);
  for (let num of nums) {
    result[num - 1] = 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (result[i] === 1) {
      result[i] = i + 1;
    }
  }
  return result.filter(e => e > 0);
};
