module.exports = function divide(x, n) {
  if (n === 0) {
    return 1;
  }

  let result = x;
  let count = 1;
  let absN = Math.abs(n);
  while (2 * count <= absN) {
    result *= result;
    count += count;
  }
  const mod = absN - count;
  for (let i = 0; i < mod; i++) {
    result *= x;
  }
  return n > 0 ? result : 1 / result;
};