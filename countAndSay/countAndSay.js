countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }
  const last = countAndSay(n - 1);
  let result = '';
  let lastChar = last[0];
  let count = 1;
  for (let i = 1; i < last.length; i++) {
    if (last[i] === lastChar) {
      count++;
    } else {
      result += count + lastChar;
      lastChar = last[i];
      count = 1;
    }
  }
  result += count + last[last.length - 1];
  return result;
};

module.exports = countAndSay;
