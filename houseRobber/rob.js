rob = function (nums) {
  let evenMax = 0;
  let oddMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenMax = Math.max(oddMax, evenMax + nums[i]);
    } else {
      oddMax = Math.max(evenMax, oddMax + nums[i]);
    }
  }
  return Math.max(evenMax, oddMax);
};

module.exports = rob;
