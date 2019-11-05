const divide = require('./divide');

test('1 divide 1', () => {
  expect(divide(1, 1)).toEqual(1);
});

test('2 divide 1', () => {
  expect(divide(2, 1)).toEqual(2);
});

test('3 divide 2', () => {
  expect(divide(3, 2)).toEqual(1);
});

test('-1 divide 1', () => {
  expect(divide(-1, 1)).toEqual(-1);
});

test('-7 divide 2', () => {
  expect(divide(-7, 2)).toEqual(-3);
});

test('0 divide 2', () => {
  expect(divide(0, 2)).toEqual(0);
});

test('7 divide -3', () => {
  expect(divide(7, -3)).toEqual(-2);
});

test('-2147483648 divide -1', () => {
  expect(divide(-2147483648, -1)).toEqual(2147483647);
});

test('-2147483648 divide 1', () => {
  expect(divide(-2147483648, 1)).toEqual(-2147483648);
});

