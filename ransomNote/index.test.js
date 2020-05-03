const canConstruct = require("./index");

let result;

function given(ransomNote, magazine) {
  result = canConstruct(ransomNote, magazine);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 char from 1 char true', function () {
  given('a', 'a');
  shouldBe(true);
});

test('1 char from 1 char false', function () {
  given('a', 'b');
  shouldBe(false);
});

test('2 char from 2 char false', function () {
  given('ab', 'bc');
  shouldBe(false);
});

test('2 char from 2 char true', function () {
  given('ab', 'ab');
  shouldBe(true);
});

test('same char duplicate', function () {
  given('aaa', 'abaa');
  shouldBe(true);
});

test('Need more same char', function () {
  given('aaa', 'aba');
  shouldBe(false);
});

