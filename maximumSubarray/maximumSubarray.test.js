const maxSubArray = require('./maximumSubarray');

test('All positive integer return sum', () => {
  expect(maxSubArray([1, 1])).toEqual(2);
});

test('First negative integer(2 elements)', () => {
  expect(maxSubArray([-1, 1])).toEqual(1);
});

test('Last negative integer(2 elements)', () => {
  expect(maxSubArray([2, -1])).toEqual(2);
});

test('Max is from start', () => {
  expect(maxSubArray([1, 1, -1])).toEqual(2);
});

test('Max is from medium to end', () => {
  expect(maxSubArray([-1, 1, 1])).toEqual(2);
});

test('Max is in medium', () => {
  expect(maxSubArray([-1, 1, -1])).toEqual(1);
});

test('Max is all sum(cross negative)', () => {
  expect(maxSubArray([1, -1, 1])).toEqual(1);
});

test('One element array', () => {
  expect(maxSubArray([87])).toEqual(87);
});
