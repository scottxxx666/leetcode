const climbingStairs = require('./climbingStairs');

test('1 stair should return 1', () => {
  expect(climbingStairs(1)).toEqual(1);
});

test('2 stair should return 2', () => {
  expect(climbingStairs(2)).toEqual(2);
});

test('3 stair should return 3', () => {
  expect(climbingStairs(3)).toEqual(3);
});

test('4 stair should return 5', () => {
  expect(climbingStairs(4)).toEqual(5);
});

test('5 stair should return 8', () => {
  expect(climbingStairs(5)).toEqual(8);
});
