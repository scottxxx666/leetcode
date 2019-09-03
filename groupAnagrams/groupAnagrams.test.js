const groupAnagrams = require('./groupAnagrams');

let result;

function given(matrix) {
  result = groupAnagrams(matrix);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 char 1 element', () => {
  given(["a"]);
  shouldBe([["a"]]);
});

test('1 char 2 element 2 anagrams', () => {
  given(["a", "b"]);
  shouldBe([["a"], ["b"]]);
});

test('1 char 2 element 1 anagrams', () => {
  given(["a", "a"]);
  shouldBe([["a", "a"]]);
});

test('2 char 2 element 2 anagrams', () => {
  given(["ab", "bc"]);
  shouldBe([
    ["ab"],
    ["bc"]
  ]);
});

test('2 char 2 element 1 anagrams', () => {
  given(["ab", "ba"]);
  shouldBe([
    ["ab", "ba"]
  ]);
});

test('3 char 3 element 1 anagrams', () => {
  given(["abc", "cba", "cab"]);
  shouldBe([
    ["abc", "cba", "cab"]
  ]);
});

test('3 char 3 element 2 anagrams (first diff)', () => {
  given(["cbd", "abc", "cab"]);
  shouldBe([
    ["cbd"],
    ["abc", "cab"]
  ]);
});

test('3 char 3 element 2 anagrams (mid diff)', () => {
  given(["abc", "cbd", "cab"]);
  shouldBe([
    ["abc", "cab"],
    ["cbd"]
  ]);
});

test('3 char 3 element 2 anagrams (last diff)', () => {
  given(["abc", "cab", "cbd"]);
  shouldBe([
    ["abc", "cab"],
    ["cbd"]
  ]);
});

test('3 char 3 element 3 anagrams', () => {
  given(["abc", "ab", "c"]);
  shouldBe([
    ["abc"],
    ["ab"],
    ["c"]
  ]);
});

test('duplicate char in 1 string', () => {
  given(["dad", "day"]);
  shouldBe([["dad"], ["day"]]);
});

test('same chars and length but diff strings', () => {
  given(["boo", "bob"]);
  shouldBe([["boo"], ["bob"]]);
});

