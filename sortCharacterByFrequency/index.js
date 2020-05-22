module.exports = (s) => {
  const map = new Map();
  for (let each of s) {
    const count = map.has(each) ? map.get(each) : 0;
    map.set(each, count + 1);
  }

  const chars = [...map.entries()];
  return chars
    .sort((a, b) => b[1] - a[1])
    .reduce((p, c) => p + c[0].repeat(c[1]), '');
};
