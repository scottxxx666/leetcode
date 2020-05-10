const findJudge = function (N, trust) {
  const candidates = new Set(Array(N).fill(0).map((v, i) => i + 1));
  const map = new Map();

  for (let i = 1; i <= N; i++) {
    map.set(i, []);
  }
  for (let [each, trusted] of trust) {
    candidates.delete(each);
    map.get(trusted).push(each);
  }

  for (let e of candidates) {
    if (map.get(e).length === (N - 1)) {
      return e;
    }
  }
  return -1;
};

module.exports = findJudge;
