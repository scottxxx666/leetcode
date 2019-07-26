const twoSum = require('./twoSum');

test('3 nums [0, 1] case', () => {
  expect(twoSum([0, 1, 2], 1)).toStrictEqual([0, 1]);
});

test('3 nums [0, 2] case', () => {
  expect(twoSum([0, 1, 2], 2)).toStrictEqual([0, 2]);
});

test('3 nums [1, 2] case', () => {
  expect(twoSum([0, 1, 2], 3)).toStrictEqual([1, 2]);
});

test('Can not use same element twice', () => {
  expect(twoSum([1, 0, 2], 2)).toStrictEqual([1, 2]);
});

test('2 nums should always return [0, 1]', () => {
  expect(twoSum([100, 101], 201)).toStrictEqual([0, 1]);
});
