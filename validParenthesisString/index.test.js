const checkValidString = require("./index");

let result;

function given(s) {
  result = checkValidString(s);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('empty string is valid', function () {
  given('');
  shouldBe(true);
});

test('1 (', function () {
  given('(');
  shouldBe(false);
});

test('1 )', function () {
  given(')');
  shouldBe(false);
});

test('1 ()', function () {
  given('()');
  shouldBe(true);
});

test('1 more (', function () {
  given('()(');
  shouldBe(false);
});

test('1 more )', function () {
  given('())');
  shouldBe(false);
});

test('2 ()', function () {
  given('()()');
  shouldBe(true);
});

test('( should come before )', function () {
  given(')(()');
  shouldBe(false);
});

test('* can be (', function () {
  given('*())');
  shouldBe(true);
});

test('* can be )', function () {
  given('*)()');
  shouldBe(true);
});

test('multiple *', function () {
  given('****');
  shouldBe(true);
});

test('* can be empty', function () {
  given('()*');
  shouldBe(true);
});

test('* not enough', function () {
  given('*))*()');
  shouldBe(false);
});

