const removedKDigits = require("./removedKDigits");

let result;

function given(num, k) {
  result = removedKDigits(num, k);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 0', function () {
  given("1", 0);
  shouldBe("1");
});

test('1 1', function () {
  given("1", 1);
  shouldBe("0");
});

test('12 1', function () {
  given("12", 1);
  shouldBe("1");
});

test('21 1', function () {
  given("21", 1);
  shouldBe("1");
});

test('21 2', function () {
  given("21", 2);
  shouldBe("0");
});

test('123 1', function () {
  given("123", 1);
  shouldBe("12");
});

test('123 2', function () {
  given("123", 2);
  shouldBe("1");
});

test('1234 1', function () {
  given("1234", 1);
  shouldBe("123");
});

test('1324 1', function () {
  given("1324", 1);
  shouldBe("124");
});

test('heading zero', function () {
  given("101", 1);
  shouldBe("1");
});

test('all zero', function () {
  given("10000", 1);
  shouldBe("0");
});

test('simple', function () {
  given("1432219", 3);
  shouldBe("1219");
});

test('desc twice', function () {
  given("43214321", 4);
  shouldBe("1321");
});

test('reverse', function () {
  given("43211234", 4);
  shouldBe("1123");
});

test('reverse 2', function () {
  given("432112343234", 4);
  shouldBe("11233234");
});

test('preserve mid', function () {
  given("5337", 2);
  shouldBe("33");
});

test('preserve mid', function () {
  given("533737", 3);
  shouldBe("333");
});

test('', function () {
  given("12341", 3);
  shouldBe("11");
});

test('same', function () {
  given("1111111", 3);
  shouldBe("1111");
});

test('same', function () {
  given("1234567890", 9);
  shouldBe("0");
});

