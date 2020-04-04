const moveZeros = require('./index');

let nums;

function given(input) {
  nums = input;
  moveZeros(nums);
}

function shouldReturn(expected) {
  expect(nums).toStrictEqual(expected);
}

test('empty', function () {
  given([]);
  shouldReturn([]);
});

test('no zero', function () {
  given([1, 2, 3]);
  shouldReturn([1, 2, 3]);
});

test('1 zero at start', function () {
  given([0, 1, 2]);
  shouldReturn([1, 2, 0]);
});

test('1 zero at mid', function () {
  given([1, 0, 2]);
  shouldReturn([1, 2, 0]);
});

test('1 zero at end', function () {
  given([1, 2, 0]);
  shouldReturn([1, 2, 0]);
});

test('2 zero at end', function () {
  given([0, 0, 1]);
  shouldReturn([1, 0, 0]);
});

test('4 elements: 1 zero at mid', function () {
  given([1, 0, 2, 3]);
  shouldReturn([1, 2, 3, 0]);
});

test('4 elements: 2 zero at mid', function () {
  given([1, 0, 0, 3]);
  shouldReturn([1, 3, 0, 0]);
});

test('4 elements: 3 zero at begin', function () {
  given([0, 0, 0, 3]);
  shouldReturn([3, 0, 0, 0]);
});

