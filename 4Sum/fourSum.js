module.exports = function (nums, target) {
  const input = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < input.length - 2; i++) {
    if (i > 0 && input[i] === input[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < input.length - 1; j++) {
      if (j > i + 1 && input[j] === input[j - 1]) {
        continue;
      }
      let low = j + 1;
      let high = input.length - 1;
      while (low < high) {
        const inputLow = input[low];
        const inputHigh = input[high];
        const sum = input[i] + input[j] + inputLow + inputHigh;
        if (sum === target) {
          result.push([input[i], input[j], inputLow, inputHigh]);
          while (low < input.length && input[low] === inputLow) {
            low++;
          }
          while (high < input.length && input[high] === inputHigh) {
            high--;
          }
        } else if (sum > target) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return result;
};

