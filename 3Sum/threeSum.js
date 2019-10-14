function find(nums, number, start) {
  let low = start;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === number) {
      return mid;
    }
    if (nums[mid] > number) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

module.exports = function (nums) {
  const input = nums.sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const target = find(nums, -input[i] - input[j], j + 1);
      if (target !== -1) {
        map.set(`${input[i]},${input[j]},${input[target]}`, 1);
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

