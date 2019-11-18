const uniquePathsWithObstacles = require('./uniquePathsWithObstacles');

test('1*1', () => {
  expect(uniquePathsWithObstacles([[0]])).toEqual(1);
});

test('1*1 with obstacle', () => {
  expect(uniquePathsWithObstacles([[1]])).toEqual(0);
});

test('1*2', () => {
  expect(uniquePathsWithObstacles([[0, 0]])).toEqual(1);
});

test('2*1', () => {
  expect(uniquePathsWithObstacles([[0], [0]])).toEqual(1);
});

test('2*2', () => {
  expect(uniquePathsWithObstacles([
    [0, 0],
    [0, 0],
  ])).toEqual(2);
});

test('2*2 1 obstacle at top', () => {
  expect(uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])).toEqual(1);
});

test('2*2 1 obstacle at left', () => {
  expect(uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])).toEqual(1);
});

test('2*2 2 obstacle', () => {
  expect(uniquePathsWithObstacles([
    [0, 1],
    [1, 0],
  ])).toEqual(0);
});

test('3*3 1 obstacle mid', () => {
  expect(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])).toEqual(2);
});

