module.exports = (nums) => {
  let maxLength = 0;
  const dp = new Array(nums.length).fill(null);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = new Array(nums.length).fill(0);
  }
  for (let i = 0; i < nums.length; i++) {
    const count = [0, 0];
    count[nums[i]]++;
    dp[i][i] = count;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const count = [...dp[i - 1][j]];
      count[nums[i]]++;
      dp[i][j] = count;
      if (count[0] === count[1]) {
        maxLength = Math.max(maxLength, count[0] * 2);
      }
    }
  }
  return maxLength;
};
