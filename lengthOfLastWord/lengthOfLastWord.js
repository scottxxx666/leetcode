lengthOfLastWord = function (s) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      count = 0;
      continue;
    }
    count++;
    result = count;
  }
  return result;
};

module.exports = lengthOfLastWord;
