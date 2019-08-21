const searchRange = require('./searchRange');

test('Not element return [-1, -1]', () => {
  expect(searchRange([], 1)).toEqual([-1, -1]);
});

test('Not find return [-1, -1]', () => {
  expect(searchRange([1, 2, 3, 4, 5], 0)).toEqual([-1, -1]);
});

test('1 elements: [0, 0]', () => {
  expect(searchRange([1], 1)).toEqual([0, 0]);
});

test('2 elements: [1, 1]', () => {
  expect(searchRange([0, 1], 1)).toEqual([1, 1]);
});

test('2 elements: [0, 1]', () => {
  expect(searchRange([1, 1], 1)).toEqual([0, 1]);
});

test('3 elements: [1, 2]', () => {
  expect(searchRange([0, 1, 1], 1)).toEqual([1, 2]);
});

test('3 elements: [0, 1]', () => {
  expect(searchRange([1, 1, 2], 1)).toEqual([0, 1]);
});

test('3 elements: [0, 2]', () => {
  expect(searchRange([1, 1, 1], 1)).toEqual([0, 2]);
});

