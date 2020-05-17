const findAnagrams = require("./index");

test('simple', function () {
  expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
});
test('simple', function () {
  expect(findAnagrams("baa", "aa")).toStrictEqual([1]);
});
