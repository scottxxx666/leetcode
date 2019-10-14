module.exports = function (nums) {
  const input = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < input.length - 2; i++) {
    let low = i + 1;
    let high = input.length - 1;
    while (low < high) {
      const lowInput = input[low];
      const highInput = input[high];
      const sum = input[i] + lowInput + highInput;
      if (sum === 0) {
        result.push([input[i], lowInput, highInput]);
        while (low < high && input[high] === highInput) {
          high--;
        }
        if (low < high && input[low] === lowInput) {
          low++;
        }
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

