const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

test('Single char return 1', () => {
  expect(lengthOfLongestSubstring('a')).toEqual(1);
});

test('Two diff char', () => {
  expect(lengthOfLongestSubstring('ab')).toEqual(2);
});

test('Two same char', () => {
  expect(lengthOfLongestSubstring('aa')).toEqual(1);
});

test('Last char duplicate', () => {
  expect(lengthOfLongestSubstring('aba')).toEqual(2);
});

test('Longest just after duplicate char', () => {
  expect(lengthOfLongestSubstring('abac')).toEqual(3);
});

test('Duplicate char is second char', () => {
  expect(lengthOfLongestSubstring('eabac')).toEqual(3);
});

test('Longest start from duplicate', () => {
  expect(lengthOfLongestSubstring('aab')).toEqual(2);
});

test('Duplicate char but only a char in longest', () => {
  expect(lengthOfLongestSubstring('abbca')).toEqual(3);
});

test('Empty string return 0', () => {
  expect(lengthOfLongestSubstring('')).toEqual(0);
});
