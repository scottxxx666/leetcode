module.exports = function (n, k) {
  const set = new Set(Array(n).fill(0).map((value, key) => key + 1));
  const factorial = new Array(n);
  let temp = 1;
  factorial[0] = 1;
  for (let i = 1; i < factorial.length; i++) {
    temp *= i;
    factorial[i] = temp;
  }

  let key = k;
  const solution = [];
  for (let i = n; i > 0; i--) {
    key = k === 0 ? i : Math.ceil(k / factorial[i - 1]);
    const digit = [...set][key - 1];
    solution.push(digit);
    set.delete(digit);
    k = k % factorial[i - 1];
  }
  return solution.join('');
};

