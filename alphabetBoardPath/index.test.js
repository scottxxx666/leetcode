const alphabetBoardPath = require("./index");

let result;

function given(target) {
  result = alphabetBoardPath(target);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('a', function () {
  given("a");
  shouldBe('!');
});

test('b', function () {
  given("b");
  shouldBe('R!');
});

test('f', function () {
  given("f");
  shouldBe('D!');
});

test('f', function () {
  given("f");
  shouldBe('D!');
});

test('fa', function () {
  given("fa");
  shouldBe('D!U!');
});

test('ba', function () {
  given("ba");
  shouldBe('R!L!');
});

test('aa', function () {
  given("aa");
  shouldBe('!!');
});

test('zb', function () {
  given("zb");
  shouldBe('DDDDD!UUUUUR!');
});

test('zdz', function () {
  given('zdz');
  shouldBe('DDDDD!UUUUURRR!DDDDLLLD!');
});

test('zz', function () {
  given('zz');
  shouldBe('DDDDD!!');
});

