const convert = require('./convert');

let result;

function given(a, b) {
  result = convert(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('string length not greater than num rows', () => {
  given('abc', 3);
  shouldBe('abc');
});

test('string length greater than num rows 1 char', () => {
  given('abcd', 3);
  shouldBe('abdc');
});

test('string length greater than num rows 2 char', () => {
  given('abcde', 3);
  shouldBe('aebdc');
});

test('string length greater than num rows twice', () => {
  given('abcdef', 3);
  shouldBe('aebdfc');
});

test('string length greater than num rows (3) multiple times', () => {
  given('PAYPALISHIRING', 3);
  shouldBe('PAHNAPLSIIGYIR');
});

test('string length greater than num rows (4) multiple times', () => {
  given('PAYPALISHIRING', 4);
  shouldBe('PINALSIGYAHRPI');
});

test('num rows is 1', () => {
  given('A', 1);
  shouldBe('A');
});

