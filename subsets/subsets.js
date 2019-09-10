function subsets(nums) {
  const map = new Map([]);
  const result = [[]];
  const uniqueSorteds = [...new Set(nums)].sort((a, b) => a - b);
  for (let i = 0; i < uniqueSorteds.length; i++) {
    const length = result.length;
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < uniqueSorteds.length; k++) {
        if (result[j].length === 0 || result[j][result[j].length - 1] < uniqueSorteds[k]) {
          const target = [...result[j], uniqueSorteds[k]];
          const key = target.join(',');
          if (!map.has(key)) {
            map.set(key, target);
            result.push(target);
          }
        }
      }
    }
  }
  return result;
}

module.exports = subsets;
