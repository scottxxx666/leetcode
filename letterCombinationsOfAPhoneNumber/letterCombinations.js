function letterCombinations(digits) {
  const lookup = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  return digits.split('').reduce((result, current) => {
    return result.reduce((prev, each) => {
      return [...prev, ...lookup[current].map(c => each + c)];
    }, []);
  }, ['']);
}

module.exports = letterCombinations;
