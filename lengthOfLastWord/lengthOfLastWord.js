lengthOfLastWord = function (s) {
  let result = 0;
  let lastNonZero = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      result++;
      continue;
    }
    if (result !== 0) {
      lastNonZero = result;
    }
    result = 0;
  }
  if (result === 0) {
    return lastNonZero;
  }
  return result;
};

module.exports = lengthOfLastWord;
