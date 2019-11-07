const myPow = require('./myPow');

test('x ** 0 return 1', () => {
  expect(myPow(87, 0)).toEqual(1);
});

test('2 ** 1 return 2', () => {
  expect(myPow(2, 1)).toEqual(2);
});

test('2 ** 2 return 4', () => {
  expect(myPow(2, 2)).toEqual(4);
});

test('2 ** 3 return 8', () => {
  expect(myPow(2, 3)).toEqual(8);
});

test('-2 ** 1 return -2', () => {
  expect(myPow(-2, 1)).toEqual(-2);
});

test('-2 ** 2 return 4', () => {
  expect(myPow(-2, 2)).toEqual(4);
});

test('-2 ** 3 return -8', () => {
  expect(myPow(-2, 3)).toEqual(-8);
});

test('2 ** -1 return 0.5', () => {
  expect(myPow(2, -1)).toEqual(0.5);
});

test('2 ** -2 return 0.25', () => {
  expect(myPow(2, -2)).toEqual(0.25);
});

test('-1 ** 2147483647 return -1', () => {
  expect(myPow(-1, 2147483647)).toEqual(-1);
});

