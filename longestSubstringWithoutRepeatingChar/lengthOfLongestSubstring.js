module.exports = function (s) {
  let result = 0;
  let start = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const each = s[i];
    if (map.has(each)) {
      start = Math.max(map.get(each) + 1, start);
    }
    result = Math.max(result, i - start + 1);
    map.set(each, i);
  }
  return result;
};
