module.exports = s => {
  const intMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += intMap[s[i]];
    if (i !== 0 && intMap[s[i]] > intMap[s[i - 1]]) {
      result -= intMap[s[i - 1]] * 2;
    }
  }
  return result;
};