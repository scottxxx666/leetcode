module.exports = function (nums) {
  let last;
  let duplicated = 0;

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const key = i - duplicated;
    if (key !== 0 && last === nums[key]) {
      nums.splice(key, 1);
      duplicated++;
    } else {
      last = nums[key];
    }
  }
  return nums.length;
};
