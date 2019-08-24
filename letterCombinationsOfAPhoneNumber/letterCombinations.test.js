const letterCombinations = require('./letterCombinations');

test('2 return a, b, c', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});

test('3 return d, e, f', () => {
  expect(letterCombinations('3')).toEqual(['d', 'e', 'f']);
});

test('4 return g, h, i', () => {
  expect(letterCombinations('4')).toEqual(['g', 'h', 'i']);
});

test('5 return j, k, l', () => {
  expect(letterCombinations('5')).toEqual(['j', 'k', 'l']);
});

test('6 return m, n, o', () => {
  expect(letterCombinations('6')).toEqual(['m', 'n', 'o']);
});

test('7 return p, q, r, s', () => {
  expect(letterCombinations('7')).toEqual(['p', 'q', 'r', 's']);
});

test('8 return t, u, v', () => {
  expect(letterCombinations('8')).toEqual(['t', 'u', 'v']);
});

test('9 return w, x, y, z', () => {
  expect(letterCombinations('9')).toEqual(['w', 'x', 'y', 'z']);
});

test('22 return aa, ab, ac, ba, bb, bc, ca, cb, cc', () => {
  expect(letterCombinations('22')).toEqual(['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']);
});

