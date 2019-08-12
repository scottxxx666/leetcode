module.exports = function (s) {
  if (s.length <= 1) {
    return s;
  }
  let result = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const half = Math.floor((j - i + 1) / 2);
      if ((j - i) % 2 === 0) {
        if (s.slice(i, i + half) === s.slice(i + half + 1, j + 1).split('').reverse().join('')) {
          if (result.length < j - i + 1) {
            result = s.slice(i, j + 1);
          }
        }
      } else {
        if (s.slice(i, i + half) === s.slice(i + half, j + 1).split('').reverse().join('')) {
          if (result.length < j - i + 1) {
            result = s.slice(i, j + 1);
          }
        }
      }
    }
  }
  return result;
}
