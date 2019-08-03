const removeDuplicates = require('./removeDuplicates');

test('Empty array', () => {
  expect(removeDuplicates([])).toEqual(0);
});

test('One element', () => {
  expect(removeDuplicates([87])).toEqual(1);
});

test('Two same number', () => {
  expect(removeDuplicates([1, 1])).toEqual(1);
});

test('Two diff number', () => {
  expect(removeDuplicates([1, 1])).toEqual(1);
});

test('Two same number and a diff', () => {
  expect(removeDuplicates([1, 1, 2])).toEqual(2);
});

test('Three same number', () => {
  expect(removeDuplicates([1, 1, 1])).toEqual(1);
});
