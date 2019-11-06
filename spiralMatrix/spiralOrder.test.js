const spiralOrder = require('./spiralOrder');

test('1 * 1', () => {
  expect(spiralOrder([
    [1],
  ])).toEqual([1]);
});

test('2 * 1', () => {
  expect(spiralOrder([
    [1, 2],
  ])).toEqual([1, 2]);
});

test('1 * 2', () => {
  expect(spiralOrder([
    [1],
    [2],
  ])).toEqual([1, 2]);
});

test('2 * 2', () => {
  expect(spiralOrder([
    [1, 2],
    [3, 4],
  ])).toEqual([1, 2, 4, 3]);
});

test('2 * 3', () => {
  expect(spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6]
  ])).toEqual([1, 2, 4, 6, 5, 3]);
});

test('3 * 3', () => {
  expect(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test('4 * 3', () => {
  expect(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

test('4 * 4', () => {
  expect(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
});

test('0 * 0', () => {
  expect(spiralOrder([])).toEqual([]);
});

