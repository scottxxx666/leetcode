module.exports = function (n, k) {
  const set = new Set(Array(n).fill(0).map((value, key) => key + 1));
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  k = k - 1;
  let key = k;
  const solution = [];
  for (let i = n; i > 0; i--) {
    factorial = factorial / i;
    key = Math.floor(k / factorial);
    const digit = [...set][key];
    solution.push(digit);
    set.delete(digit);
    k = k % factorial;
  }
  return solution.join('');
};

