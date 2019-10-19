const multiplyStrings = require('./multiplyStrings');

let result;

function given(a, b) {
  result = multiplyStrings(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1 digit multiply without carry', () => {
  given('2', '3');
  shouldBe('6');
});

test('1 digit multiply with carry', () => {
  given('5', '3');
  shouldBe('15');
});

test('1 digit multiply 2 digits', () => {
  given('2', '18');
  shouldBe('36');
});

test('2 digits multiply 2 digits', () => {
  given('25', '18');
  shouldBe('450');
});

test('carry more 2 digits', () => {
  given('99', '99');
  shouldBe('9801');
});

test('product is zero', () => {
  given('9999', '0');
  shouldBe('0');
});

