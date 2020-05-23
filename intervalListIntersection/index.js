module.exports = (A, B) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < A.length && j < B.length) {
    const [s1, e1] = A[i];
    const [s2, e2] = B[j];

    const low = Math.max(s1, s2);
    const high = Math.min(e1, e2);
    if (low <= high) {
      result.push([low, high]);
    }

    if (e1 >= e2) {
      j++;
    } else {
      i++;
    }
  }
  return result;
};
