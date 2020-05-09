module.exports = function (num) {
  let left = 1;
  let right = num;
  while (left < right) {
    const target = Math.floor((left + right) / 2);
    if (target ** 2 >= num) {
      right = target;
    } else {
      left = target + 1;
    }
  }
  return left ** 2 === num;
};
