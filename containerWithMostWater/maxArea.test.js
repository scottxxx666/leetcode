const maxArea = require('./maxArea');

test('Only 1 duplicate number in array', () => {
  expect(maxArea([1, 1])).toEqual(1);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([2, 2])).toEqual(2);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([1, 2])).toEqual(1);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([1, 1, 1])).toEqual(2);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([2, 1, 2])).toEqual(4);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([3, 3, 1])).toEqual(3);
});

test('Only 1 duplicate number in array', () => {
  expect(maxArea([1, 4, 4, 1])).toEqual(4);
});
