module.exports = function (a, b) {
  let result = '';
  let carry = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const digitA = a.charAt(a.length - i - 1) || 0;
    const digitB = b.charAt(b.length - i - 1) || 0;
    const sum = parseInt(digitA, 10) + parseInt(digitB, 10) + carry;
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
  }
  if (carry === 1) {
    result = carry.toString() + result;
  }
  return result;
};

