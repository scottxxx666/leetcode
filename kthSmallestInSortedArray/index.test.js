const kthSmallest = require("./index");

let result;

function given(matrix, k) {
  result = kthSmallest(matrix, k);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1*1 1th smallest', function () {
  given([[1]], 1);
  shouldBe(1);
});

test('2*2 num 1th smallest', function () {
  given([
    [2, 3],
    [4, 5],
  ], 1);
  shouldBe(2);
});

test('2*2 num 2th smallest', function () {
  given([
    [2, 3],
    [4, 5],
  ], 2);
  shouldBe(3);
});

test('2*2 num 3th smallest', function () {
  given([
    [2, 3],
    [4, 5],
  ], 3);
  shouldBe(4);
});

test('duplicate', function () {
  given([
    [2, 4],
    [4, 5],
  ], 3);
  shouldBe(4);
});

test('difficult', function () {
  given([
    [1, 3, 5],
    [6, 7, 12],
    [11, 14, 14],
  ], 3);
  shouldBe(5);
});

test('difficult 2', function () {
  given([
    [1, 3, 5],
    [6, 7, 12],
    [11, 14, 14],
  ], 4);
  shouldBe(6);
});

test('difficult 3', function () {
  given([
    [1, 3, 5],
    [6, 7, 12],
    [11, 14, 14],
  ], 6);
  shouldBe(11);
});

