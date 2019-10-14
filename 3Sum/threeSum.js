module.exports = function (nums) {
  const input = nums.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 0) {
          map.set(`${input[i]},${input[j]},${input[k]}`, 1);
        }
        if (input[i] + input[j] + input[k] >= 0) {
          break;
        }
      }
    }
  }

  const result = [];
  map.forEach((value, key) => {
    const solution = key.split(',').map(e => parseInt(e, 10));
    result.push(solution)
  });
  return result;
};

