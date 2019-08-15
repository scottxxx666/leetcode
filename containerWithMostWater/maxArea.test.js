const maxArea = require('./maxArea');

test('Only 2 integer', () => {
  expect(maxArea([1, 1])).toEqual(1);
});

test('Only 2 integer with height 2', () => {
  expect(maxArea([2, 2])).toEqual(2);
});

test('Only 2 integer with diff height', () => {
  expect(maxArea([1, 2])).toEqual(1);
});

test('3 same integer', () => {
  expect(maxArea([1, 1, 1])).toEqual(2);
});

test('Head and tail are highest', () => {
  expect(maxArea([2, 1, 2])).toEqual(4);
});

test('First and second are highest', () => {
  expect(maxArea([3, 3, 1])).toEqual(3);
});

test('2 highest in middle', () => {
  expect(maxArea([1, 4, 4, 1])).toEqual(4);
});
