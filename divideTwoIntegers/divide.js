module.exports = function divide(dividend, divisor) {
  let result = 0;
  let minus = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    minus = true;
  }
  dividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let last = 0;
  while (dividend >= absDivisor) {
    last = absDivisor;
    absDivisor += absDivisor;
    if (result === 0) {
      result++;
    } else {
      result += result;
    }
  }
  let diff = dividend - last;
  while (diff >= 0) {
    diff -= Math.abs(divisor);
    result++;
  }
  result--;
  if ((result > 2 ** 31 - 1 && !minus) || (result > 2 ** 31 && minus)) {
    return 2 ** 31 - 1;
  }
  return minus ? -result : result;
};