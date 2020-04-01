function setGraph(require, pre, course) {
  if (require.has(pre)) {
    require.get(pre).push(course);
  } else {
    require.set(pre, [course]);
  }
}

module.exports = (numCourses, prerequisites) => {
  const require = new Map();
  const incoming = new Array(numCourses).fill(0);
  for (let [course, pre] of prerequisites) {
    incoming[course]++;
    setGraph(require, pre, course);
  }

  for (let i = 0; i < numCourses; i++) {
    const index = incoming.findIndex(e => e === 0);
    if (index === -1) {
      return false;
    }
    incoming[index] = -1;
    if (!require.has(index)) {
      continue;
    }
    const temp = require.get(index);
    for (let each of temp) {
      incoming[each]--;
    }
  }

  return true;
};
