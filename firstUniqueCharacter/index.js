const firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? [...map.get(s[i]), i] : [i]);
  }
  for (let key of map.keys()) {
    if (map.get(key).length === 1) {
      return map.get(key)[0];
    }
  }
  return -1;
};

