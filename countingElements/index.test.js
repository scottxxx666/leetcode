const countElements = require('./index');

function shouldReturn(numbers) {
  expect(countElements(nums)).toBe(numbers);
}

let nums;

function given(arr) {
  nums = arr;
}

test('empty', function () {
  given([]);
  shouldReturn(0);
});

test('1 num', function () {
  given([1]);
  shouldReturn(0);
});

test('2 num with 1', function () {
  given([1, 2]);
  shouldReturn(1);
});

test('reverse 2 num with 1', function () {
  given([2, 1]);
  shouldReturn(1);
});

test('reverse 2 num with 0', function () {
  given([3, 1]);
  shouldReturn(0);
});

test('duplicate should count separate', function () {
  given([1, 1, 2, 2]);
  shouldReturn(2);
});

test('duplicate 1 count', function () {
  given([2, 1, 1]);
  shouldReturn(2);
});

