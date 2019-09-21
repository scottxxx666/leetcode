function sort(nums, order, i) {
  if (nums[i] <= order[order.length - 1]) {
    return;
  }
  let target = nums[i];
  let j = 0;
  let k = order.length - 1;
  while (j <= k) {
    const pointer = Math.floor((j + k) / 2);
    if (order[pointer] > target) {
      j = pointer + 1;
    } else {
      k = pointer - 1;
    }
  }
  order.splice(j, 0, target);
  order.splice(order.length - 1, 1);
}

findKthLargest = function (nums, k) {
  let order = new Array(k).fill(Number.NEGATIVE_INFINITY);
  for (let i = 0; i < nums.length; i++) {
    sort(nums, order, i);
  }
  return order[order.length - 1];
};

module.exports = findKthLargest;
