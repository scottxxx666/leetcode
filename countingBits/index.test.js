const countBits = require("./index");

let result;

function given(num) {
  result = countBits(num);
}

function shouldBe(expected) {
  expect(result).toStrictEqual(expected);
}

test('0', function () {
  given(0);
  shouldBe([0]);
});

test('1', function () {
  given(1);
  shouldBe([0, 1]);
});

test('2', function () {
  given(2);
  shouldBe([0, 1, 1]);
});

test('3', function () {
  given(3);
  shouldBe([0, 1, 1, 2]);
});

test('4', function () {
  given(4);
  shouldBe([0, 1, 1, 2, 1]);
});

test('5', function () {
  given(5);
  shouldBe([0, 1, 1, 2, 1, 2]);
});

