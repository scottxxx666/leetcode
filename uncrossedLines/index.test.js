const maxUncrossedLines = require("./index");

let result;

function given(A, B) {
  result = maxUncrossedLines(A, B);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 1 same', function () {
  given([1], [1]);
  shouldBe(1);
});

test('1 1 diff', function () {
  given([1], [2]);
  shouldBe(0);
});

test('1 2 1 line', function () {
  given([1, 2], [2]);
  shouldBe(1);
});

test('2 2 1 line', function () {
  given([1, 2], [2, 3]);
  shouldBe(1);
});

test('2 2 2 line', function () {
  given([1, 2], [1, 2]);
  shouldBe(2);
});

test('2 2 line can not cross so only 1', function () {
  given([1, 2], [2, 1]);
  shouldBe(1);
});

test('3 3 only 1 line due to cross', function () {
  given([1, 2, 3], [1, 3, 2]);
  shouldBe(2);
});

test('1 3 with 1 line', function () {
  given([3], [3, 3, 2]);
  shouldBe(1);
});

test('1 3 with 1 line', function () {
  given([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]);
  shouldBe(2);
});

