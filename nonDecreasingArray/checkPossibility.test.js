const checkPossibility = require('./checkPossibility');

test('2 element always true', () => {
  expect(checkPossibility([0, 0])).toEqual(true);
});

test('Non-decreasing array', () => {
  expect(checkPossibility([1, 1, 1])).toEqual(true);
});

test('Need to modify 1', () => {
  expect(checkPossibility([3, 2, 3])).toEqual(true);
});

test('Need to modify 2', () => {
  expect(checkPossibility([3, 2, 1])).toEqual(false);
});

test('Need to modify 1 (3 elements)', () => {
  expect(checkPossibility([3, 0, 1])).toEqual(true);
});

test('Need to modify 2 (4 elements)', () => {
  expect(checkPossibility([3, 2, 2])).toEqual(true);
});

test('Need to modify 2 (4 elements)', () => {
  expect(checkPossibility([2, 3, 2, 1])).toEqual(false);
});

test('Need to modify 1 (4 elements)', () => {
  expect(checkPossibility([2, 3, 2, 2])).toEqual(true);
});

test('Need to modify 2 (4 elements)', () => {
  expect(checkPossibility([3, 4, 2, 3])).toEqual(false);
});

test('Need to modify 1 (5 elements)', () => {
  expect(checkPossibility([2, 3, 3, 2, 4])).toEqual(true);
});

test('Need to modify 1 (5 elements)', () => {
  expect(checkPossibility([1, 4, 2, 3, 3])).toEqual(true);
});

test('Need to modify 1 (5 elements)', () => {
  expect(checkPossibility([1, 2, 4, 5, 3])).toEqual(true);
});
