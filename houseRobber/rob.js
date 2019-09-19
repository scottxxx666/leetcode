rob = function (nums) {
  let last = 0;
  let last2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = Math.max(last + nums[i], last2);
    last = last2;
    last2 = temp;
  }
  return Math.max(last, last2);
};

module.exports = rob;
