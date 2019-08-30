const strStr = require('./strStr');

let haystack;
let needle;

function given(h, n) {
  haystack = h;
  needle = n;
}

function shouldBe(numbers) {
  expect(strStr(haystack, needle)).toEqual(numbers);
}

test('not found return -1', () => {
  given('b', 'a');
  shouldBe(-1);
});

test('needle length 1 and index 1', () => {
  given('a', 'a');
  shouldBe(0);
});

test('needle length 1 and index 2', () => {
  given('ba', 'a');
  shouldBe(1);
});

test('needle length 2 and index 3', () => {
  given('abcbe', 'be');
  shouldBe(3);
});

test('empty string needle return 0', () => {
  given('abcbe', '');
  shouldBe(0);
});

