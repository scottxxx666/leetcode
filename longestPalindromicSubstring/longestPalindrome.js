function maxExpandPalindrome(s, start, end) {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return end - start - 1;
}

const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }
  let start = 0;
  let end = 0;
  for (let center = 0; center < s.length; center++) {
    const max1 = maxExpandPalindrome(s, center, center);
    const max2 = maxExpandPalindrome(s, center, center + 1);
    if (max1 > (end - start + 1)) {
      const length = Math.floor(max1 / 2);
      start = center - length;
      end = center + length;
    }
    if (max2 > (end - start + 1)) {
      const length = max2 / 2;
      start = center - length + 1;
      end = center + length;
    }
  }
  return s.slice(start, end + 1);
};

module.exports = longestPalindrome