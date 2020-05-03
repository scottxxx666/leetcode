module.exports = (ransomNote, magazine) => {
  const map = new Map;
  for (let each of magazine) {
    if (map.has(each)) {
      map.set(each, map.get(each) + 1);
    } else {
      map.set(each, 1);
    }
  }

  for (let each of ransomNote) {
    if (!map.has(each) || map.get(each) === 0) {
      return false;
    }
    map.set(each, map.get(each) - 1);
  }
  return true;
};
