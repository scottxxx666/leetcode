module.exports = function (s) {
  let result = 0;
  let start = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const each = s[i];
    if (!map.has(each) || map.get(each) < start) {
      result = Math.max(result, i - start + 1);
    } else {
      start = map.get(each) + 1;
    }
    map.set(each, i);
  }
  return result;
};
