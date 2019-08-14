const findDuplicate = require('./findDuplicate');

test('Only 1 duplicate number in array', () => {
  expect(findDuplicate([1, 1])).toEqual(1);
});

test('3 integer: duplicate once from end', () => {
  expect(findDuplicate([1, 2, 2])).toEqual(2);
});

test('3 integer: duplicate once at begin and end', () => {
  expect(findDuplicate([1, 2, 1])).toEqual(1);
});

test('3 integer: duplicate once at end', () => {
  expect(findDuplicate([1, 1, 2])).toEqual(1);
});

test('4 integer: duplicate twice', () => {
  expect(findDuplicate([1, 2, 1, 1])).toEqual(1);
});

test('Only 1 duplicate number in array', () => {
  expect(findDuplicate([1, 2, 3, 1])).toEqual(1);
});
