const findJudge = function (N, trust) {
  const counts = new Array(N + 1).fill(0);
  for (let [person, trusted] of trust) {
    counts[person] += N;
    counts[trusted]++;
  }

  for (let i = 1; i <= N; i++) {
    if (counts[i] === N - 1) {
      return i;
    }
  }
  return -1;
};

module.exports = findJudge;
