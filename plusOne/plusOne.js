module.exports = function (digits) {
  const result = [];
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const target = digits[i] + carry;
    result.splice(0, 0, target % 10);
    carry = Math.floor(target / 10);
  }
  if (carry !== 0) {
    result.splice(0, 0, carry);
  }
  return result;
};

