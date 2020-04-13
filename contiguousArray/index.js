module.exports = (nums) => {
  let maxLength = 0;
  const dp = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const count = [0, 0];
    count[nums[i]]++;
    dp[i] = count;
    for (let j = 0; j < i; j++) {
      const count = [...dp[j]];
      count[nums[i]]++;
      dp[j] = count;
      if (count[0] === count[1]) {
        maxLength = Math.max(maxLength, count[0] * 2);
      }
    }
  }
  return maxLength;
};
