const frequencySort = require("./index");
let result;

function given(s) {
  result = frequencySort(s);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('sort by frequency', function () {
  given('abb');
  shouldBe('bba');
});

test('a A is diff', function () {

});
