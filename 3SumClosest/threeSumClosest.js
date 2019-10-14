module.exports = function (nums, target) {
  const input = nums.sort((a, b) => a - b);
  let closest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < input.length - 2; i++) {
    const diff = target - input[i];
    let low = i + 1;
    let high = input.length - 1;
    while (low < high) {
      const sum = input[low] + input[high];
      if (Math.abs(closest) > Math.abs(diff - sum)) {
        closest = diff - sum;
      }
      if (sum <= diff) {
        low++;
      } else {
        high--;
      }
    }
  }
  return target - closest;
};

