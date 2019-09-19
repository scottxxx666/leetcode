const rob = require('./rob');

let result;

function given(a) {
  result = rob(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1 integer', () => {
  given([1]);
  shouldBe(1);
});

test('2 integer', () => {
  given([1, 2]);
  shouldBe(2);
});

test('3 integer (max is 1+3)', () => {
  given([1, 2, 3]);
  shouldBe(4);
});

test('3 integer (max is 2)', () => {
  given([1, 3, 1]);
  shouldBe(3);
});

test('4 integer (max is 1+3)', () => {
  given([1, 2, 4, 1]);
  shouldBe(5);
});

test('4 integer (max is 1+4)', () => {
  given([1, 0, 2, 3]);
  shouldBe(4);
});

test('4 integer (max is 2+4)', () => {
  given([1, 2, 3, 4]);
  shouldBe(6);
});

test('5 integer (max is 2+4)', () => {
  given([1, 2, 3, 4, 1]);
  shouldBe(6);
});

test('5 integer (max is 1+3+5)', () => {
  given([1, 2, 3, 4, 5]);
  shouldBe(9);
});

