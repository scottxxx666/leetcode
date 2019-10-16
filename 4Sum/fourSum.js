module.exports = function (nums, target) {
  const input = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < input.length;) {
    for (let j = i + 1; j < input.length;) {
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

      const last = input[j];
      while (j < input.length && input[j] === last) {
        j++;
      }
    }
    const last = input[i];
    while (i < input.length && input[i] === last) {
      i++;
    }
  }
  return result;
};

