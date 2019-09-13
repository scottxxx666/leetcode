function majorityElement(nums) {
  const map = new Map();
  nums.forEach(n => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1)
    }
  });

  let majority = nums[0];
  let maxTimes = map.get(majority);
  for (let [num, times] of map) {
    if (times > maxTimes) {
      maxTimes = times;
      majority = num;
    }
  }
  return majority;
}


module.exports = majorityElement;
