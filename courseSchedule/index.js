module.exports = (numCourses, prerequisites) => {
  const dp = [];
  for (let i = 0; i < numCourses; i++) {
    const arr = new Array(numCourses).fill(0);
    dp.push(arr);
  }
  for (let each of prerequisites) {
    const [course, pre] = each;
    dp[course][pre] = 1;
  }

  for (let i = 0; i < numCourses; i++) {
    for (let j = 0; j < numCourses; j++) {
      if (dp[i][j] === 1) {
        if (dp[j][i] === 1) {
          return false;
        }
        for (let k = 0; k < numCourses; k++) {
          if (dp[j][k] === 1) {
            if (dp[k][i] === 1) {
              return false;
            }
            dp[i][k] = 1;
          }
        }
      }
    }
  }

  return true;
};
