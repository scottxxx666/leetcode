function generateParenthesis(n) {
  if (n === 0) {
    return [''];
  }
  let result = [];
  for (let i = 0; i <= n - 1; i++) {
    generateParenthesis(i).forEach(left => {
      generateParenthesis(n - i - 1).forEach(right => {
        result.push('(' + left + ')' + right);
      });
    })
  }
  return result;
}

module.exports = generateParenthesis;
