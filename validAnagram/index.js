module.exports = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    if (map.has(target)) {
      map.set(target, map.get(target) + 1);
    } else {
      map.set(target, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const target = t[i];
    if (!map.has(target)) {
      return false;
    }
    const count = map.get(target);
    if (count === 1) {
      map.delete(target);
    } else {
      map.set(target, count - 1);
    }
  }
  return map.size === 0;
};
