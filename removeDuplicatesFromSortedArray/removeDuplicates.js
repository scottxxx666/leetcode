module.exports = function (nums) {
  const length = nums.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (count !== 0 && nums[count - 1] === nums[count]) {
      nums.splice(count, 1);
    } else {
      count++;
    }
  }
  return count;
};
