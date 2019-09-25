const lengthOfLastWord = require('./lengthOfLastWord');

let result;

function given(a) {
  result = lengthOfLastWord(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('empty string', () => {
  given('');
  shouldBe(0);
});

test('1 string length 1', () => {
  given('a');
  shouldBe(1);
});

test('1 string length 2', () => {
  given('ab');
  shouldBe(2);
});

test('1 string length 3', () => {
  given('abc');
  shouldBe(3);
});

test('2 string final length 1', () => {
  given('abc d');
  shouldBe(1);
});

test('2 string final length 2', () => {
  given('abc de');
  shouldBe(2);
});

test('3 string final length 1', () => {
  given('abc de f');
  shouldBe(1);
});

test('3 string final length 2', () => {
  given('abc de fg');
  shouldBe(2);
});

test('ending with space', () => {
  given('a ');
  shouldBe(1);
});

test('ending with 2 space', () => {
  given('a  ');
  shouldBe(1);
});

test('1 space', () => {
  given(' ');
  shouldBe(0);
});

