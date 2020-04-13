const wiggleSort = require("./index");

let numsInput;

function given(nums) {
  numsInput = nums;
}

function shouldBe(expected) {
  wiggleSort(numsInput);
  expect(numsInput).toStrictEqual(expected);
}

test('1 num', function () {
  given([1]);
  shouldBe([1]);
});

test('2 num bigger first', function () {
  given([2, 1]);
  shouldBe([1, 2]);
});

test('2 num smaller first', function () {
  given([1, 2]);
  shouldBe([1, 2]);
});

test('3 num asc', function () {
  given([1, 2, 3]);
  shouldBe([2, 3, 1]);
});

test('3 num biggest mid', function () {
  given([1, 3, 2]);
  shouldBe([2, 3, 1]);
});

test('3 num biggest first smallest mid', function () {
  given([3, 1, 2]);
  shouldBe([2, 3, 1]);
});

test('3 num desc', function () {
  given([3, 2, 1]);
  shouldBe([2, 3, 1]);
});

test('3 num mid first biggest mid', function () {
  given([2, 3, 1]);
  shouldBe([2, 3, 1]);
});

test('3 num mid first smallest mid', function () {
  given([2, 1, 3]);
  shouldBe([2, 3, 1]);
});

test('many duplicate shuffle', function () {
  given([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]);
  shouldBe([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
});

test('replace first', function () {
  given([4, 5, 5, 6]);
  shouldBe([5, 6, 4, 5]);
});

