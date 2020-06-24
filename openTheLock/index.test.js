const openLock = require("./index");

test('', function () {
  expect(openLock(['0100'], '0200')).toBe(-1);
});

test('start from deadend', function () {
  expect(openLock(['0000'], '0200')).toBe(-1);
});

