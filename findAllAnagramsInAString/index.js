function getKey(s) {
  return s.charCodeAt(0) - 'a'.charCodeAt(0);
}

module.exports = (s, p) => {
  const counts = new Array(26).fill(0);
  for (let each of p) {
    const key = getKey(each);
    counts[key]++;
  }

  const result = [];
  let left = 0;
  let right = 0;
  let length = 0;
  while (right < s.length) {
    const key = getKey(s[right]);
    counts[key]--;
    right++;
    if (counts[key] >= 0) {
      length++;
    }

    if (length === p.length) {
      result.push(left);
    }

    if (right - left >= p.length) {
      const key = getKey(s[left]);
      counts[key]++;
      if (counts[key] >= 1) {
        length--;
      }
      left++;
    }
  }
  return result;
};
