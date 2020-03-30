const isHappy = require('./index');

test('1 is happy number', function () {
  expect(isHappy(1)).toBe(true);
});

test('2 is not happy number', function () {
  expect(isHappy(2)).toBe(false);
});

test('10 is happy number', function () {
  expect(isHappy(10)).toBe(true);
});

test('11 is not happy number', function () {
  expect(isHappy(11)).toBe(false);
});

test('111 is not happy number', function () {
  expect(isHappy(111)).toBe(false);
});

test('100 is happy number', function () {
  expect(isHappy(100)).toBe(true);
});

test('19 is happy number', function () {
  expect(isHappy(19)).toBe(true);
});

test('7 is happy number', function () {
  expect(isHappy(7)).toBe(true);
});

