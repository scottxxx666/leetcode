module.exports = (A) => {
  const sum = A.reduce((p, c) => p + c);

  let ans1 = Number.MIN_SAFE_INTEGER;
  let temp = 0;
  for (let i = 0; i < A.length; i++) {
    temp = A[i] + Math.max(0, temp);
    ans1 = Math.max(ans1, temp);
  }

  let min = Number.MAX_SAFE_INTEGER;
  temp = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < A.length - 1; i++) {
    temp = A[i] + Math.min(0, temp);
    min = Math.min(temp, min);
  }
  const ans2 = sum - min;

  return Math.max(ans1, ans2);
};
