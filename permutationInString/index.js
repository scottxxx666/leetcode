module.exports = (s1, s2) => {
  const counts = new Array(26).fill(0);
  for (let each of s1) {
    counts[each.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let start = 0;
  let end = 0;
  let length = 0;
  while (end < s2.length) {
    const key = s2.charCodeAt(end) - 'a'.charCodeAt(0);
    counts[key]--;
    if (counts[key] >= 0) {
      length++;
    }

    if (length === s1.length) {
      return true;
    }
    end++;

    if (end - start >= s1.length) {
      const k = s2.charCodeAt(start) - 'a'.charCodeAt(0);
      counts[k]++;
      if (counts[k] >= 1) {
        length--;
      }
      start++;
    }
  }
  return false;
};
