const openLock = require("./index");

test('', function () {
  expect(openLock(['0100'], '0200')).toBe(-1);
});

