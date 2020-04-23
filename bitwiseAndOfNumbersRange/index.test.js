const rangeBitwiseAnd = require("./index");
let result;

function given(m, n) {
  result = rangeBitwiseAnd(m, n);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('0, 0', function () {
  given(0, 0);
  shouldBe(0);
});

test('1, 1', function () {
  given(1, 1);
  shouldBe(1);
});

test('0, 1', function () {
  given(0, 1);
  shouldBe(0);
});

test('1, 2', function () {
  given(1, 2);
  shouldBe(0);
});

test('1, 3', function () {
  given(1, 3);
  shouldBe(0);
});

test('1, 3', function () {
  given(1, 3);
  shouldBe(0);
});

test('2, 3', function () {
  given(2, 3);
  shouldBe(2);
});

test('2, 4', function () {
  given(2, 4);
  shouldBe(0);
});

test('5, 7', function () {
  given(5, 7);
  shouldBe(4);
});

