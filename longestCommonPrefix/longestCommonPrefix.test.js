const longestCommonPrefix = require('./longestCommonPrefix');

test('Two same char return itself', () => {
  expect(longestCommonPrefix(['a', 'a'])).toEqual('a');
});

test('Two different char return empty string', () => {
  expect(longestCommonPrefix(['a', 'b'])).toEqual('');
});

test('Two different strings with a beginning prefix char', () => {
  expect(longestCommonPrefix(['aa', 'ab'])).toEqual('a');
});

test('Ending prefix char should return empty string', () => {
  expect(longestCommonPrefix(['aa', 'ba'])).toEqual('');
});

test('Two same strings(2 chars)', () => {
  expect(longestCommonPrefix(['aa', 'aa'])).toEqual('aa');
});

test('Three same strings and a diff string with a prefix char', () => {
  expect(longestCommonPrefix(['aa', 'aa', 'ab'])).toEqual('a');
});

test('Three same strings(3 chars)', () => {
  expect(longestCommonPrefix(['aa', 'aa', 'aa'])).toEqual('aa');
});

test('Empty array should return empty string', () => {
  expect(longestCommonPrefix([])).toEqual('');
});