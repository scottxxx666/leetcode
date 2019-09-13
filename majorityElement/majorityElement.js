function majorityElement(nums) {
  let candidate = nums[0];
  let times = 0;
  for (let num of nums) {
    if (times === 0) {
      candidate = num;
    }
    times += num === candidate ? 1 : -1;
  }
  return candidate;
}

module.exports = majorityElement;
