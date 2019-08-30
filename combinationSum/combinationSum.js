function combinationSum(candidates, target) {
  let result = [];
  candidates = candidates.sort((a, b) => a - b);
  for (let i = 0; i < candidates.length && candidates[i] <= target; i++) {
    if (candidates[i] === target) {
      result.push([target]);
    }
    if (target - candidates[i] >= candidates[0]) {
      let solutions = combinationSum(candidates.filter(e => e >= candidates[i]), target - candidates[i]);
      result = [...result, ...solutions.map(s => [candidates[i], ...s])];
    }
  }
  return result;
}

module.exports = combinationSum;
