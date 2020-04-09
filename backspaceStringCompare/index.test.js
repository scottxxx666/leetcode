const backspaceCompare = require("./index");

test('1 char 1 char true', function () {
  expect(backspaceCompare('a', 'a')).toBe(true);
});

test('1 char 1 char false', function () {
  expect(backspaceCompare('b', 'a')).toBe(false);
});

test('2 char 1 char false', function () {
  expect(backspaceCompare('ba', 'a')).toBe(false);
});

test('2 char 1 char true', function () {
  expect(backspaceCompare('#a', 'a')).toBe(true);
});

test('ever true but back', function () {
  expect(backspaceCompare('a#', 'a')).toBe(false);
});

test('back twice and same', function () {
  expect(backspaceCompare('ab#c##d', '#a#d')).toBe(true);
});

