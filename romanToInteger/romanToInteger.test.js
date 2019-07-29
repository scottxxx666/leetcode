const romanToInteger = require('./romanToInteger');

test('I is 1', () => {
  expect(romanToInteger('I')).toEqual(1);
});

test('V is 5', () => {
  expect(romanToInteger('V')).toEqual(5);
});

test('X is 10', () => {
  expect(romanToInteger('X')).toEqual(10);
});

test('L is 50', () => {
  expect(romanToInteger('L')).toEqual(50);
});

test('C is 100', () => {
  expect(romanToInteger('C')).toEqual(100);
});

test('D is 500', () => {
  expect(romanToInteger('D')).toEqual(500);
});

test('M is 1000', () => {
  expect(romanToInteger('M')).toEqual(1000);
});

test('Normal add', () => {
  expect(romanToInteger('II')).toEqual(2);
});

test('Subtraction', () => {
  expect(romanToInteger('IV')).toEqual(4);
});
