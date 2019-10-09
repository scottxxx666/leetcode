const convert = require('./plusOne');

let result;

function given(digits) {
  result = convert(digits);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1 digit without carry', () => {
  given([0]);
  shouldBe([1]);
});

test('1 digit with carry', () => {
  given([9]);
  shouldBe([1, 0]);
});

test('2 digit without carry', () => {
  given([1, 0]);
  shouldBe([1, 1]);
});

test('2 digit with carry in units digit', () => {
  given([1, 0]);
  shouldBe([1, 1]);
});

test('2 digit with carry in tens and units digits', () => {
  given([9, 9]);
  shouldBe([1, 0, 0]);
});

