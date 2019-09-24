const countAndSay = require('./countAndSay');

let result;

function given(a) {
  result = countAndSay(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1', () => {
  given(1);
  shouldBe('1');
});

test('2', () => {
  given(2);
  shouldBe('11');
});

test('3', () => {
  given(3);
  shouldBe('21');
});

test('4', () => {
  given(4);
  shouldBe('1211');
});

test('5', () => {
  given(5);
  shouldBe('111221');
});

test('6', () => {
  given(6);
  shouldBe('312211');
});

