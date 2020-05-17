const findAnagrams = require("./index");

test('simple', function () {
  expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
}); 
