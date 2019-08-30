function strStr(haystack, needle) {
  if (needle.length < 1) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1;
      while (i + j < haystack.length && j < needle.length && haystack[i + j] === needle[j]) {
        j++;
      }
      if (j === needle.length) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = strStr;
