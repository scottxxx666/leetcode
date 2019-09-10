function subsets(nums) {
  const result = [[]];
  for (let i = 0; i < nums.length; i++) {
    const length = result.length;
    for (let j = 0; j < length; j++) {
      result.push([...result[j], nums[i]]);
    }
  }
  return result;
}

module.exports = subsets;
