const stringShift = require("./index");

let result;

function given(s, shift) {
  result = stringShift(s, shift);
}

function shouldReturn(expected) {
  expect(result).toBe(expected);
}

test('0 move', function () {
  given('abc', [[0, 0]]);
  shouldReturn('abc');
});

test('0 move v2', function () {
  given('abc', [[0, 0]]);
  shouldReturn('abc');
});

test('1 right move', function () {
  given('abc', [[1, 1]]);
  shouldReturn('cab');
});

test('1 right move 2', function () {
  given('abc', [[1, 2]]);
  shouldReturn('bca');
});

test('2 right move 1', function () {
  given('abc', [[1, 1], [1, 1]]);
  shouldReturn('bca');
});

test('1 left move', function () {
  given('abc', [[0, 1]]);
  shouldReturn('bca');
});

test('mix', function () {
  given('abc', [[0, 1], [1, 2], [0, 2]]);
  shouldReturn('bca');
});

test('many left shift', function () {
  given('xqgwkiqpif', [[1, 4], [0, 7], [0, 8], [0, 7], [0, 6], [1, 3], [0, 1], [1, 7], [0, 5], [0, 6]]);
  shouldReturn('qpifxqgwki');
});

