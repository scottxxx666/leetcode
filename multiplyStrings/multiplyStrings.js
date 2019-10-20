function toInt(num, i) {
  if (i < 0) {
    return 0;
  }
  return num[i] - '0';
}

module.exports = function (num1, num2) {
  let sums = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let key = i + j + 1;
      let product = toInt(num1, i) * toInt(num2, j) + sums[key];
      sums[key] = product % 10;
      sums[key - 1] += Math.floor(product / 10);
    }
  }
  let start = false;
  return sums.reduce((prev, cur) => {
    start = cur !== 0 ? true : start;
    return start ? prev + cur : '';
  }, '') || '0';
};

