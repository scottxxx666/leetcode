const reverseInteger = require('./reverseInteger');

test('1 digit return same number', () => {
  expect(reverseInteger(1)).toEqual(1);
});

test('12 return 21', () => {
  expect(reverseInteger(12)).toEqual(21);
});

test('123 return 321', () => {
  expect(reverseInteger(123)).toEqual(321);
});

test('-12 return same -21', () => {
  expect(reverseInteger(-12)).toEqual(-21);
})

test('10 return 1', () => {
  expect(reverseInteger(10)).toEqual(1);
})

test('overflow 2^31 should return 0', () => {
  expect(reverseInteger(1534236469)).toEqual(0);
})

test('overflow -2^31 should return 0', () => {
  expect(reverseInteger(-1534236469)).toEqual(0);
})
