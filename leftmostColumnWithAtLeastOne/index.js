module.exports = (binaryMatrix) => {
  const [rows, columns] = binaryMatrix.dimensions();
  let i = 0;
  let j = columns - 1;
  let result = Number.MAX_SAFE_INTEGER;
  while (i < rows && i >= 0 && j < columns && j >= 0) {
    if (binaryMatrix.get(i, j)) {
      result = Math.min(result, j);
      j--;
    } else {
      i++;
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
