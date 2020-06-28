const longest = require("./index");

let result;

function given(s, k) {
  result = longest(s, k);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('empty string k=0', function () {
  given('', 0);
  shouldBe(0);
});

test('length 1 k=1', function () {
  given('a', 1);
  shouldBe(1);
});

test('length 2 k=1', function () {
  given('ab', 1);
  shouldBe(1);
});

test('length 2 k=2', function () {
  given('ab', 2);
  shouldBe(2);
});

test('length 3 k=1', function () {
  given('aba', 1);
  shouldBe(1);
});

test('length 3 k=1 duplicate char', function () {
  given('aab', 1);
  shouldBe(2);
});

test('length 3 k=2', function () {
  given('aba', 2);
  shouldBe(3);
});

