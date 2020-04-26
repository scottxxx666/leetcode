const longestCommonSubsequence = require("./index");

let result;

function shouldBe(expected) {
  expect(result).toBe(expected);
}

function given(text1, text2) {
  result = longestCommonSubsequence(text1, text2);
}

test('a a', function () {
  given('a', 'a');
  shouldBe(1);
});

test('a b', function () {
  given('a', 'b');
  shouldBe(0);
});

test('ab cd', function () {
  given('ab', 'cd');
  shouldBe(0);
});

test('ab ac', function () {
  given('ab', 'ac');
  shouldBe(1);
});

test('ba ca', function () {
  given('ba', 'ca');
  shouldBe(1);
});

test('ab ba', function () {
  given('ab', 'ca');
  shouldBe(1);
});

test('ab ba', function () {
  given('ab', 'ca');
  shouldBe(1);
});

test('difficult', function () {
  given('oxcpqrsvwf', 'shmtulqrypy');
  shouldBe(2);
});

