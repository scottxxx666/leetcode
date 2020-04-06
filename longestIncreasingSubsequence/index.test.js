const lengthOfLIS = require('./index');

let nums;

function given(input) {
  nums = input;
}

function shouldReturn(expected) {
  expect(lengthOfLIS(nums)).toBe(expected);
}

test('empty', function () {
  given([]);
  shouldReturn(0);
});

test('1 num', function () {
  given([999]);
  shouldReturn(1);
});

test('2 num length 1', function () {
  given([999, 1]);
  shouldReturn(1);
});

test('2 num length 2', function () {
  given([1, 2]);
  shouldReturn(2);
});

test('3 num length 1', function () {
  given([3, 2, 1]);
  shouldReturn(1);
});

test('3 num length 2 at first', function () {
  given([1, 2, 1]);
  shouldReturn(2);
});

test('3 num length 2 at end', function () {
  given([3, 2, 3]);
  shouldReturn(2);
});

test('3 num length 2 split', function () {
  given([1, 4, 3]);
  shouldReturn(2);
});

test('3 num length 3', function () {
  given([1, 2, 3]);
  shouldReturn(3);
});

test('mid start and jump 1', function () {
  given([10, 9, 2, 5, 3, 4]);
  shouldReturn(3);
});

test('jump 2', function () {
  given([10, 9, 2, 4, 5, 3, 4, 5]);
  shouldReturn(4);
});

test('from start and not change', function () {
  given([1, 8, 9, 10, 3, 4]);
  shouldReturn(4);
});

test('from start and not change', function () {
  given([1, 2, 9, 3, 4, 5, 10]);
  shouldReturn(6);
});

test('same number', function () {
  given([2, 2]);
  shouldReturn(1);
});

test('from start and jump 1', function () {
  given([1, 3, 6, 7, 9, 4, 10, 5, 6]);
  shouldReturn(6);
});

