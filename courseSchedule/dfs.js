function hasCycle(visited, require, key) {
  if (visited[key]) {
    return true;
  }
  visited[key] = true;
  if (!require.has(key)) {
    visited[key] = false;
    return false;
  }
  let result = require.get(key).reduce((prev, curr) => prev || hasCycle(visited, require, curr), false);
  visited[key] = false;
  return result;
}

module.exports = (numCourses, prerequisites) => {
  const require = new Map();
  const visited = new Array(numCourses).fill(false);
  for (let [course, pre] of prerequisites) {
    if (require.has(course)) {
      require.get(course).push(pre);
    } else {
      require.set(course, [pre]);
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(visited, require, i)) {
      return false;
    }
  }
  return true;
};
