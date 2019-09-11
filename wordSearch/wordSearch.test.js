const wordSearch = require('./wordSearch');

let result;

function given(a, b) {
  result = wordSearch(a, b);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('0 element not found', () => {
  given([], 'A');
  shouldBe(false);
});

test('1 element found', () => {
  given([['A']], 'A');
  shouldBe(true);
});

test('1 element not found', () => {
  given([['A']], 'B');
  shouldBe(false);
});

test('2 element not found', () => {
  given([['A', 'C']], 'AB');
  shouldBe(false);
});

test('2 element right found', () => {
  given([['A', 'B']], 'AB');
  shouldBe(true);
});

test('2 element left found', () => {
  given([['B', 'A']], 'AB');
  shouldBe(true);
});

test('2 element down found', () => {
  given([
    ['A'],
    ['B']
  ], 'AB');
  shouldBe(true);
});

test('2 element up found', () => {
  given([
    ['B'],
    ['A']
  ], 'AB');
  shouldBe(true);
});

test('1 element can use once', () => {
  given([
    ['B', 'C'],
    ['A', 'D']
  ], 'ABA');
  shouldBe(false);
});

