function singleNumber(nums) {
  return nums.reduce((prev, e) => prev ^ e, 0);
}

module.exports = singleNumber;
