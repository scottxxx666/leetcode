const sqrt = require('./sqrt');

let result;

function given(a) {
  result = sqrt(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('0', () => {
  given(0);
  shouldBe(0);
});

test('1', () => {
  given(1);
  shouldBe(1);
});

test('2', () => {
  given(2);
  shouldBe(1);
});

test('3', () => {
  given(3);
  shouldBe(1);
});

test('4', () => {
  given(4);
  shouldBe(2);
});

