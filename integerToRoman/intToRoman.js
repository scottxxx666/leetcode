module.exports = function (num) {
  const map = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  const sortedKeys = Object.keys(map).sort((a, b) => b - a);
  let result = '';
  while (num > 0) {
    const key = sortedKeys.find(e => num - e >= 0);
    num -= key;
    result += map[key];
  }
  return result;
};

