function findCombinations(candidates, target, result, solution, start) {
  if (target === 0) {
    result.push([...solution]);
  }
  for (let i = start; i < candidates.length; i++) {
    solution.push(candidates[i]);
    if (target >= candidates[i]) {
      findCombinations(candidates, target - candidates[i], result, solution, i);
    }
    solution.pop();
  }
}

function combinationSum(candidates, target) {
  const result = [];
  findCombinations(candidates, target, result, [], 0);
  return result;
}

module.exports = combinationSum;
