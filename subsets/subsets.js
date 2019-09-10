function subsets(nums) {
  const map = new Map([]);
  const result = [[]];
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    const length = result.length;
    while (j < length) {
      for (let k = 0; k < nums.length; k++) {
        if (result[j].length === 0 || result[j][result[j].length - 1] < nums[k]) {
          const target = [...result[j], nums[k]];
          const key = target.join(',');
          if (!map.has(key)) {
            map.set(key, target);
            result.push(target);
          }
        }
      }
      j++;
    }
  }
  return result;
}

module.exports = subsets;
