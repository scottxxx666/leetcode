lengthOfLastWord = function (s) {
  let count = 0;
  let tail = s.length - 1;
  while (tail >= 0 && s[tail] === ' ') {
    tail--;
  }
  while (tail >= 0 && s[tail] !== ' ') {
    count++;
    tail--;
  }
  return count;
};

module.exports = lengthOfLastWord;
