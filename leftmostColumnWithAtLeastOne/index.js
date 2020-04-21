module.exports = (binaryMatrix) => {
  const [rows, columns] = binaryMatrix.dimensions();
  let left = 0;
  let right = columns - 1;
  let result = Number.MAX_SAFE_INTEGER;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < rows; i++) {
      if (binaryMatrix.get(i, mid) === 1) {
        count++;
      }
    }
    if (count === 1) {
      return mid;
    }
    if (count > 1) {
      result = Math.min(result, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
