const longestPalindrome = require('./longestPalindrome');

test('Empty string return self', () => {
  expect(longestPalindrome('')).toEqual('');
});

test('A char return self', () => {
  expect(longestPalindrome('a')).toEqual('a');
});

test('Two same char', () => {
  expect(longestPalindrome('aa')).toEqual('aa');
});

test('Two diff char', () => {
  expect(longestPalindrome('ab')).toEqual('a');
});

test('Length three palindrome', () => {
  expect(longestPalindrome('aba')).toEqual('aba');
});

test('Last two char palindrome', () => {
  expect(longestPalindrome('abb')).toEqual('bb');
});

test('Only first char', () => {
  expect(longestPalindrome('abc')).toEqual('a');
});

test('Length four palindrome', () => {
  expect(longestPalindrome('abba')).toEqual('abba');
});

test('Two redundant and four palindrome', () => {
  expect(longestPalindrome('abacca')).toEqual('acca');
});

test('A redundant and five palindrome', () => {
  expect(longestPalindrome('abaccab')).toEqual('baccab');
});

test('Two redundant and six palindrome', () => {
  expect(longestPalindrome('wabaccab')).toEqual('baccab');
});

test('Three palindrome and two redundant', () => {
  expect(longestPalindrome('babad')).toEqual('bab');
});

test('A redundant and three palindrome', () => {
  expect(longestPalindrome('caba')).toEqual('aba');
});