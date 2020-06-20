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

const getPermutation = function (n, k) {
  const set = Array(n).fill(0).map((value, key) => key + 1);
  let result = '';

  function append(n, k) {
    if (n === 1) {
      return result += set[0];
    }
    const key = Math.ceil(k / factorial(n - 1)) - 1;
    result += set[key].toString();
    set.splice(key, 1);
    append(n - 1, k - key * factorial(n - 1));
  }

  append(n, k);
  return result;
};

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
