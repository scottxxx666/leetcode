module.exports = function (x) {
  let min = 0;
  let max = x;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (mid ** 2 === x) {
      return mid;
    }
    if (mid ** 2 > x) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return max;
};

