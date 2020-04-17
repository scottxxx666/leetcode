const intersect = require("./index");

let result;

test('2 empty', function () {
  given([], []);
  shouldBe([]);
});

test('1 intersect', function () {
  given([1], [1]);
  shouldBe([1]);
});

test('2 nums 1 intersect', function () {
  given([1, 2], [1]);
  shouldBe([1]);
});

test('2 nums 1 intersect last', function () {
  given([1], [1, 2]);
  shouldBe([1]);
});

test('2 intersect', function () {
  given([1, 2, 3], [1, 2]);
  shouldBe([1, 2]);
});
test('3 intersect without order', function () {
  given([1, 2, 3, 4], [0, 3, 2, 4]);
  shouldBe([2, 3, 4]);
});

test('3 intersect without order', function () {
  given([1, 2, 3, 4], [0, 3, 2, 4]);
  shouldBe([2, 3, 4]);
});

test('duplicate', function () {
  given([2, 1, 2, 2], [3, 2, 2, 4, 2]);
  shouldBe([2, 2, 2]);
});

test('2 duplicate', function () {
  given([4, 9, 5], [9, 4, 9, 8, 4]);
  shouldBe([4, 9]);
});

function shouldBe(expected) {
  expect(result.sort()).toStrictEqual(expected.sort());
}

function given(nums1, nums2) {
  result = intersect(nums1, nums2);
}

