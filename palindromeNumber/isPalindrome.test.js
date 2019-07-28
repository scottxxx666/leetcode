const isPalindrome = require('./isPalindrome');

test('1 digit is always true', () => {
  expect(isPalindrome(1)).toEqual(true);
});

test('2 diff digit is false', () => {
  expect(isPalindrome(12)).toEqual(false);
});

test('2 same digit is true', () => {
  expect(isPalindrome(11)).toEqual(true);
});

test('3 digit false case', () => {
  expect(isPalindrome(123)).toEqual(false);
});

test('3 digit true case', () => {
  expect(isPalindrome(121)).toEqual(true);
});

test('4 digit false case', () => {
  expect(isPalindrome(1231)).toEqual(false);
});

test('4 digit false case', () => {
  expect(isPalindrome(1223)).toEqual(false);
});

test('4 digit true case', () => {
  expect(isPalindrome(1221)).toEqual(true);
});

test('nagative num is always false', () => {
  expect(isPalindrome(-1)).toEqual(false);
});

