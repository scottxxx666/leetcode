module.exports = (s) => {
  const map = new Map();
  for (let each of s) {
    const count = map.has(each) ? map.get(each) : 0;
    map.set(each, count + 1);
  }

  const counts = new Array(s.length + 1);
  for (let [k, v] of map.entries()) {
    if (counts[v]) {
      counts[v] = [...counts[v], k];
    } else {
      counts[v] = [k];
    }
  }

  let result = '';
  for (let i = counts.length - 1; i >= 0; i--) {
    if (!counts[i]) {
      continue;
    }
    result += counts[i].reduce((p, c) => p + c.repeat(i), '');
  }
  return result;
};
