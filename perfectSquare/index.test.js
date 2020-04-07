const numSquares = require('./index');

let number;

function given(n) {
  number = n;
}

function shouldReturn(expected) {
  expect(numSquares(number)).toBe(expected);
}

test('1', function () {
  given(1);
  shouldReturn(1);
});

test('2', function () {
  given(2);
  shouldReturn(2);
});

test('3', function () {
  given(3);
  shouldReturn(3);
});

test('4', function () {
  given(4);
  shouldReturn(1);
});

test('5', function () {
  given(5);
  shouldReturn(2);
});

test('6', function () {
  given(6);
  shouldReturn(3);
});

test('7', function () {
  given(7);
  shouldReturn(4);
});

test('8', function () {
  given(8);
  shouldReturn(2);
});

test('9', function () {
  given(9);
  shouldReturn(1);
});

test('12 not use the biggest', function () {
  given(12);
  shouldReturn(3);
});

