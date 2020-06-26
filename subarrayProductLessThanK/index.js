const numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;
  let l = 0;
  let product = 1;
  for (let r = 0; r < nums.length; r++) {
    product *= nums[r];

    while (product >= k) {
      product /= nums[l];
      l++;
    }
    result += r - l + 1;
  }
  return result;
};
