const minSubArrayLen = function (s, nums) {
  let sum = 0;
  let start = 0;
  let result = Number.MAX_SAFE_INTEGER;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= s) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
