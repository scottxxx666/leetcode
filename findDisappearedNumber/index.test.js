const findDisappearedNumber = require('./index');

function shouldBe(expected) {
  expect(findDisappearedNumber(numbers)).toStrictEqual(expected);
}

let numbers;

function given(nums) {
  numbers = nums;
}

test('1 num', function () {
  given([1]);
  shouldBe([]);
});

test('2 num missing 2', function () {
  given([1, 1]);
  shouldBe([2]);
});

test('2 num no missing', function () {
  given([1, 2]);
  shouldBe([]);
});

test('3 num missing 3', function () {
  given([2, 1, 1]);
  shouldBe([3]);
});

test('3 num missing 2', function () {
  given([3, 3, 1]);
  shouldBe([2]);
});

test('3 num missing 1, 3', function () {
  given([2, 2, 2]);
  shouldBe([1, 3]);
});

