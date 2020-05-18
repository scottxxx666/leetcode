const check = require("./index");

let result;

function given(s1, s2) {
  result = check(s1, s2);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('length 1 1 same', function () {
  given('a', 'a');
  shouldBe(true);
});

test('length 1 1 diff', function () {
  given('a', 'b');
  shouldBe(false);
});

test('from start true', function () {
  given('ab', 'abc');
  shouldBe(true);
});

test('mid true', function () {
  given('ab', 'dabc');
  shouldBe(true);
});

test('end true', function () {
  given('ab', 'dab');
  shouldBe(true);
});

test('duplicate true', function () {
  given('ab', 'bab');
  shouldBe(true);
});

test('has chars but not permutation', function () {
  given('ab', 'acb');
  shouldBe(false);
});

