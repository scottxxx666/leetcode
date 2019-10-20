const getPermutation = require('./getPermutation');

let result;

function given(a, b) {
  result = getPermutation(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('n = 1, k = 1', () => {
  given(1, 1);
  shouldBe('1');
});

test('n = 2, k = 1', () => {
  given(2, 1);
  shouldBe('12');
});

test('n = 2, k = 2', () => {
  given(2, 2);
  shouldBe('21');
});

test('n = 3, k = 1', () => {
  given(3, 1);
  shouldBe('123');
});

test('n = 3, k = 2', () => {
  given(3, 2);
  shouldBe('132');
});

test('n = 3, k = 3', () => {
  given(3, 3);
  shouldBe('213');
});

test('n = 3, k = 4', () => {
  given(3, 4);
  shouldBe('231');
});

test('n = 3, k = 5', () => {
  given(3, 5);
  shouldBe('312');
});

test('n = 3, k = 6', () => {
  given(3, 6);
  shouldBe('321');
});

test('n = 4, k = 9', () => {
  given(4, 9);
  shouldBe('2314');
});

