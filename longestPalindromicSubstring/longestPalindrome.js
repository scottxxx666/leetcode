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
    const max = Math.max(max1, max2);
    if (max > (end - start + 1)) {
      start = center - Math.floor((max - 1) / 2);
      end = center + Math.ceil((max - 1) / 2);
    }
  }
  return s.slice(start, end + 1);
};

module.exports = longestPalindrome