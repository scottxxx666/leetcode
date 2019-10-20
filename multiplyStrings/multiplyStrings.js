function toInt(num, i) {
  if (i < 0) {
    return 0;
  }
  return num[i] - '0';
}

module.exports = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let sums = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let product = toInt(num1, i) * toInt(num2, j);
      let key = num1.length - 1 - i + num2.length - 1 - j;
      do {
        if (key >= sums.length) {
          sums.push(product);
        } else {
          sums[key] += product;
        }
        product = Math.floor(sums[key] / 10);
        sums[key] = sums[key] % 10;
        key++;
      } while (product !== 0)
    }
  }
  return sums.reverse().join('');
};

