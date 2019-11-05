function checkEnough(diff, isGreatZero) {
  return isGreatZero ? diff >= 0 : diff <= 0;
}

module.exports = function divide(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  let diff = dividend;

  let result = 0;
  if (Math.abs(dividend - divisor) <= Math.abs(dividend)) {
    while (checkEnough(diff, dividend >= 0)) {
      diff = diff - divisor;
      result++;
    }
    result--;
  } else {
    while (checkEnough(diff, dividend >= 0)) {
      diff = diff + divisor;
      result--;
    }
    result++;
  }
  if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
    return 2 ** 31 - 1;
  }
  return result;
};