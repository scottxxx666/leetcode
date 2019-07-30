module.exports = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  return strs.reduce((prev, str) => {
    let result = '';
    for (let i = 0; i < prev.length && prev[i] === str[i]; i++) {
      result += prev[i];
    }
    return result;
  });
}