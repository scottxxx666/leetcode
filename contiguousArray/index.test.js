const findMaxLength = require("./index");

let result;

function given(nums) {
  result = findMaxLength(nums);
}

function shouldReturn(expected) {
  expect(result).toBe(expected);
}

test('empty', function () {
  given([]);
  shouldReturn(0);
});

test('1 num', function () {
  given([1]);
  shouldReturn(0);
});

test('2 diff num', function () {
  given([1, 0]);
  shouldReturn(2);
});

test('2 same num', function () {
  given([1, 1]);
  shouldReturn(0);
});

test('4 shuffle nums', function () {
  given([1, 0, 1, 0]);
  shouldReturn(4);
});

test('4 num duplicate in mid', function () {
  given([1, 0, 0, 1]);
  shouldReturn(4);
});

test('4 num duplicate in start', function () {
  given([0, 0, 1, 1]);
  shouldReturn(4);
});

test('6 num start from mid', function () {
  given([1, 1, 0, 1, 1, 0]);
  shouldReturn(4);
});

test('6 num start from start', function () {
  given([0, 0, 1, 1, 0, 0]);
  shouldReturn(4);
});

