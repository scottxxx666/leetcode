function toInt(num, i) {
  if (i < 0) {
    return 0;
  }
  return num[i];
}

module.exports = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let sums = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const digit = toInt(num1, i) * toInt(num2, j);
      const key = num1.length - 1 - i + num2.length - 1 - j;
      if (key < sums.length) {
        sums[key].push(digit);
      } else {
        sums.push([digit]);
      }
    }
  }
  let result = '';
  let carry = 0;
  for (let each of sums) {
    carry += each.reduce((prev, curr) => prev + parseInt(curr), 0);
    const digit = (carry % 10).toString();
    result = digit + result;
    carry = Math.floor(carry / 10);
  }
  if (carry != 0) {
    result = carry + result;
  }
  return result;
};

