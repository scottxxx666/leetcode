function area(height, i, j) {
  return Math.min(height[i], height[j]) * (j - i);
}

const maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;
  while (start < end) {
    max = Math.max(max, area(height, start, end));
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return max;
};

module.exports = maxArea