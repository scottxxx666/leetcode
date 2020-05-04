const findComplement = require("./index");

let result;

function given(num) {
  result = findComplement(num);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('0', function () {
  given(0);
  shouldBe(1);
});

test('1', function () {
  given(1);
  shouldBe(0);
});

test('2', function () {
  given(2);
  shouldBe(1);
});

test('3', function () {
  given(3);
  shouldBe(0);
});

test('4', function () {
  given(4);
  shouldBe(3);
});

test('5', function () {
  given(5);
  shouldBe(2);
});

