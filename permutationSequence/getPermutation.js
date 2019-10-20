function nextPermutation(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

function permutation(n, k, solution, set) {
  if (n === 1) {
    solution.push(...set);
    return;
  }
  const next = nextPermutation(n - 1);
  const key = k === 0 ? n : Math.ceil(k / next);
  const digit = [...set][key - 1];
  solution.push(digit);
  set.delete(digit);
  permutation(n - 1, k % next, solution, set);
}

module.exports = function (n, k) {
  const set = new Set(Array(n).fill(0).map((value, key) => key + 1));
  const solution = [];
  permutation(n, k, solution, set);
  return solution.join('');
};

