maxProduct = function (nums) {
  let products = new Array(nums.length).fill({});
  products[0] = {max: nums[0], min: nums[0]};
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    products[i] = {
      max: Math.max(products[i - 1].max * nums[i], products[i - 1].min * nums[i], nums[i]),
      min: Math.min(products[i - 1].min * nums[i], products[i - 1].max * nums[i], nums[i])
    };
    max = Math.max(max, products[i].max);
  }
  return max;
};

module.exports = maxProduct;
