const isValidParentheses = require('./validParentheses');

test('Empty string is valid', () => {
  expect(isValidParentheses('')).toEqual(true);
});

test('Single parentheses is invalid', () => {
  expect(isValidParentheses('(')).toEqual(false);
});

test('A pair parentheses is valid', () => {
  expect(isValidParentheses('()')).toEqual(true);
});

test('Two same parentheses is invalid', () => {
  expect(isValidParentheses('((')).toEqual(false);
});

test('Odd parentheses is invalid', () => {
  expect(isValidParentheses('()(')).toEqual(false);
});

test('([)] is invalid', () => {
  expect(isValidParentheses('([)]')).toEqual(false);
});

test('([]) is valid', () => {
  expect(isValidParentheses('([])')).toEqual(true);
});
