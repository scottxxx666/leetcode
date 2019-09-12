const wordSearch = require('./wordBreak');

let result;

function given(a, b) {
  result = wordSearch(a, b);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 char and found', () => {
  given('a', ['a']);
  shouldBe(true);
});

test('1 char not found', () => {
  given('a', ['b']);
  shouldBe(false);
});

test('1 char and found in the end (2 word dict)', () => {
  given('a', ['b', 'a']);
  shouldBe(true);
});

test('1 char and found in the begin (2 word dict)', () => {
  given('a', ['a', 'b']);
  shouldBe(true);
});

test('word can reuse', () => {
  given('aba', ['a', 'b']);
  shouldBe(true);
});

test('overlap words so false', () => {
  given('aba', ['ab', 'ba']);
  shouldBe(false);
});

test('overlap words and true', () => {
  given('aba', ['a', 'ab']);
  shouldBe(true);
});

