const addBinary = require('./addBinary');

let result;

function given(a, b) {
  result = addBinary(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('0 + 0', () => {
  given('0', '0');
  shouldBe('0');
});

test('0 + 1', () => {
  given('0', '1');
  shouldBe('1');
});

test('1 + 1', () => {
  given('1', '1');
  shouldBe('10');
});

test('10 + 1', () => {
  given('10', '1');
  shouldBe('11');
});

test('11 + 1', () => {
  given('11', '1');
  shouldBe('100');
});

test('11 + 11', () => {
  given('11', '11');
  shouldBe('110');
});

