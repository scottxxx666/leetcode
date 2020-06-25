const sortedSquares = function (A) {
  let left = 0;
  let right = A.length - 1;
  const result = [];
  while (left <= right) {
    const l = A[left] ** 2;
    const r = A[right] ** 2;
    if (l >= r) {
      result.unshift(l);
      left++;
    } else {
      result.unshift(r);
      right--;
    }
  }
  return result;
};
