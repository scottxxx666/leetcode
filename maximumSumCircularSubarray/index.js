module.exports = (A) => {
  const a = [...A, ...A];
  let max = Number.MIN_SAFE_INTEGER;
  for (let start = 0; start < A.length; start++) {
    let sum = 0;
    for (let i = start; i <= start + A.length - 1; i++) {
      sum += a[i];
      sum = Math.max(a[i], sum);
      max = Math.max(max, sum);
    }
  }
  return max;
};
