const subarraySum = require("./index");

let result;

function given(nums, k) {
  result = subarraySum(nums, k);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 num 1 solution', function () {
  given([2], 2);
  shouldBe(1);
});

test('1 num 0 solution', function () {
  given([2], 1);
  shouldBe(0);
});

test('2 num 1 solution', function () {
  given([2, 1], 3);
  shouldBe(1);
});

test('2 num 0 solution', function () {
  given([2, 1], 0);
  shouldBe(0);
});

test('3 num 0 solution', function () {
  given([1, 2, 1], 0);
  shouldBe(0);
});

test('3 num 1 solution', function () {
  given([1, -1, 1], -1);
  shouldBe(1);
});

test('3 num 2 solution', function () {
  given([1, -1, 1], 0);
  shouldBe(2);
});

test('3 num 2 solution II', function () {
  given([2, 1, 1], 2);
  shouldBe(2);
});

