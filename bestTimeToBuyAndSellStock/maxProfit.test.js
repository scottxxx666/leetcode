const maxProfit = require('./maxProfit');

test('Empty array return 0', () => {
  expect(maxProfit([])).toEqual(0);
});

test('Positive profit in 2 days', () => {
  expect(maxProfit([1, 2])).toEqual(1);
});

test('Positive profit in 3 days', () => {
  expect(maxProfit([1, 2, 3])).toEqual(2);
});

test('Can not sell before you buy', () => {
  expect(maxProfit([3, 1, 2])).toEqual(1);
});

test('No positive profit should return 0', () => {
  expect(maxProfit([2, 1])).toEqual(0);
});
