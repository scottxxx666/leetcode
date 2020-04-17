const topKFrequent = require("./index");

let result;

function given(nums, k) {
  result = topKFrequent(nums, k);
}

function shouldBe(expected) {
  expect(result).toStrictEqual(expected);
}

test('1 element top 1', function () {
  given([1], 1);
  shouldBe([1]);
});

test('2 element top 1', function () {
  given([1, 2, 2], 1);
  shouldBe([2]);
});

test('2 element top 2', function () {
  given([1, 2, 2], 2);
  shouldBe([2, 1]);
});

test('3 element top 1', function () {
  given([2, 1, 3, 2, 2, 1], 1);
  shouldBe([2]);
});

test('3 element top 2', function () {
  given([2, 1, 3, 2, 2, 3], 2);
  shouldBe([2, 3]);
});

