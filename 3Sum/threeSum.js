module.exports = function (nums) {
  const input = nums.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < input.length - 2; i++) {
    let low = i + 1;
    let high = input.length - 1;
    while (low < high) {
      const sum = input[i] + input[low] + input[high];
      if (sum === 0) {
        map.set(`${input[i]},${input[low]},${input[high]}`, 1);
        high--;
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        low++;
      }
    }
  }
  let result = [];
  map.forEach(((value, key) => result.push(key.split(',').map(e => parseInt(e, 10)))));
  return result;
};

