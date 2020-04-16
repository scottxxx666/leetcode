module.exports = (num) => {
  if (num === 0) {
    return [0];
  }
  const result = [0, 1];
  let pointer = 0;
  for (let i = 2; i <= num; i++) {
    if (pointer === i / 2) {
      pointer = 0;
    }
    result.push(result[pointer++] + 1);
  }
  return result;
};
