module.exports = (num) => {
  const result = [0];
  let pointer = 0;
  for (let i = 1; i <= num; i++) {
    if (pointer === i / 2) {
      pointer = 0;
    }
    result.push(result[pointer++] + 1);
  }
  return result;
};
