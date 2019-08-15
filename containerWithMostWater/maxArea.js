const maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      if (max < area) {
        max = area;
      }
    }
  }
  return max;
};

module.exports = maxArea