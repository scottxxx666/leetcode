module.exports = (A, B) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < A.length && j < B.length) {
    const [s1, e1] = A[i];
    const [s2, e2] = B[j];
    if (s1 >= s2 && s1 <= e2) {
      result.push([s1, Math.min(e1, e2)]);
    }
    if (s2 >= s1 && s2 <= e1) {
      result.push([s2, Math.min(e1, e2)]);
    }
    if (e1 >= e2) {
      j++;
    } else {
      i++;
    }
  }
  return result;
};
