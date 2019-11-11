const generateMatrix = require('./generateMatrix');

test('1', function () {
  expect(generateMatrix(1)).toStrictEqual([[1]]);
});

test('2', function () {
  expect(generateMatrix(2)).toStrictEqual([
    [1, 2],
    [4, 3],
  ]);
});

test('3', function () {
  expect(generateMatrix(3)).toStrictEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);
});

test('4', function () {
  expect(generateMatrix(4)).toStrictEqual([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]);
});

