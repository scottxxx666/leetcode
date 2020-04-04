const searchMatrix = require('./index');

test('empty 1 dimension array', function () {
  expect(searchMatrix([], 1)).toBe(false);
});

test('empty array', function () {
  expect(searchMatrix([[]], 1)).toBe(false);
});

test('1*1 true', function () {
  expect(searchMatrix([[1]], 1)).toBe(true);
});

test('1*1 false', function () {
  expect(searchMatrix([[1]], 0)).toBe(false);
});

test('1*2 true', function () {
  expect(searchMatrix([[1, 2]], 2)).toBe(true);
});

test('2*1 true', function () {
  expect(searchMatrix([[1], [2]], 2)).toBe(true);
});

test('2*2 false', function () {
  expect(searchMatrix([[1, 3], [2, 4]], 0)).toBe(false);
});

test('2*2 first true', function () {
  expect(searchMatrix([[1, 3], [2, 4]], 1)).toBe(true);
});

test('2*2 right top true', function () {
  expect(searchMatrix([[1, 3], [2, 4]], 3)).toBe(true);
});

test('2*2 left down true', function () {
  expect(searchMatrix([[1, 3], [2, 4]], 2)).toBe(true);
});

test('2*2 right down true', function () {
  expect(searchMatrix([[1, 3], [2, 4]], 4)).toBe(true);
});

test('3*3 true', function () {
  expect(searchMatrix([
    [1, 3, 5],
    [2, 4, 6],
    [7, 8, 9],
  ], 4)).toBe(true);
});

test('odd matrix and target in position even', function () {
  expect(searchMatrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ], 19)).toBe(true);
});

test('odd matrix and target in position even', function () {
  expect(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ], 5)).toBe(true);
});

test('odd matrix and target in position odd, even', function () {
  expect(searchMatrix([
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10],
    [11, 13, 15, 17, 19],
    [12, 14, 16, 18, 20],
    [21, 22, 23, 24, 25],
  ], 13)).toBe(true);
});

