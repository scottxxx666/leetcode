module.exports = (arr) => {
  const map = new Map();
  for (let each of arr) {
    if (map.has(each)) {
      map.set(each, map.get(each) + 1);
    } else {
      map.set(each, 1);
    }
  }

  let result = 0;
  for (let [key, value] of map.entries()) {
    if (map.has(key + 1)) {
      result += value;
    }
  }
  return result;
};
