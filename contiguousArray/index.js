module.exports = (nums) => {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      const count = new Array(2).fill(0);
      for (let k = j; k <= i; k++) {
        count[nums[k]]++;
        if (count[0] === count[1]) {
          maxLength = Math.max(maxLength, count[0] * 2);
        }
      }
    }
  }
  return maxLength;
};
