module.exports = (arr) => {
  const map = new Map();
  for (let each of arr) {
    if (map.has(each)) {
      map.set(each, map.get(each) + 1);
    } else {
      map.set(each, 1);
    }
  }

  return [...map.entries()].reduce((prev, [key, value]) => {
    return map.has(key + 1) ? prev + value : prev;
  }, 0);
};
