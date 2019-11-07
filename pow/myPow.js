module.exports = function divide(x, n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  let absN = Math.abs(n);
  for (let i = 0; i < absN; i++) {
    result *= x;
  }
  return n > 0 ? result : 1 / result;
};