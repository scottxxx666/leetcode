module.exports = (N, dislikes) => {
  function dfs(i, color) {
    if (group.has(i)) {
      return group.get(i) === color;
    }

    if (!map.has(i)) {
      return true;
    }

    group.set(i, color);
    for (let each of map.get(i)) {
      if (!dfs(each, color ^ 1)) {
        return false;
      }
    }
    return true;
  }

  const map = new Map();
  for (let [a, b] of dislikes) {
    if (map.has(a)) {
      map.get(a).push(b);
    } else {
      map.set(a, [b]);
    }
    if (map.has(b)) {
      map.get(b).push(a);
    } else {
      map.set(b, [a]);
    }
  }

  const group = new Map();
  for (let i = 1; i <= N; i++) {
    if (!group.has(i) && !dfs(i, 0)) {
      return false;
    }
  }
  return true;
};

