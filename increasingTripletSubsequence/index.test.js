const increasingTriplet = require("./index");

let result;

function given(nums) {
  result = increasingTriplet(nums);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('emptu', function () {
  given([]);
  shouldBe(false);
});

test('3 increasing', function () {
  given([1, 2, 3]);
  shouldBe(true);
});

test('3 not increasing', function () {
  given([1, 2, 2]);
  shouldBe(false);
});

test('4 with 3 increasing', function () {
  given([1, 2, 1, 3]);
  shouldBe(true);
});

test('4 with 3 not increasing', function () {
  given([1, 2, 1, -1]);
  shouldBe(false);
});

test('should drop first', function () {
  given([3, 1, 2, 3]);
  shouldBe(true);
});

test('all same', function () {
  given([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  shouldBe(false);
});

