const isAnagram = require("./index");

let result;

function given(s, t) {
  result = isAnagram(s, t);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('2 empty', function () {
  given('', '');
  shouldBe(true);
});

test('1 empty 1 num', function () {
  given('', 'a');
  shouldBe(false);
});

test('true diff char', function () {
  given('abcdef', 'fedcba');
  shouldBe(true);
});

test('diff char num', function () {
  given('abcdef', 'fedcbab');
  shouldBe(false);
});

test('duplicate char', function () {
  given('aaaabc', 'bcaaaa');
  shouldBe(true);
});

test('duplicate char but false', function () {
  given('aaaabc', 'bcaaab');
  shouldBe(false);
});

