module.exports = function (nums) {
  const input = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < input.length - 2; i++) {
    let low = i + 1;
    let high = input.length - 1;
    while (low < high) {
      const sum = input[i] + input[low] + input[high];
      if (sum === 0) {
        result.push([input[i], input[low], input[high]]);
        while (high >= 1 && input[high - 1] === input[high]) {
          high--;
        }
        if (low < input.length - 1 && input[low] === input[low + 1]) {
          low++;
        }
        high--;
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        low++;
      }
    }
    while (i < input.length - 3 && input[i] === input[i + 1]) {
      i++;
    }
  }
  return result;
};

