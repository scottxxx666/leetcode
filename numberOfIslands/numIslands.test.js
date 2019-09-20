const inumIslands = require('./numIslands');

let result;

function given(a) {
  result = inumIslands(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('0*0 0 island', () => {
  given([]);
  shouldBe(0);
});

test('0*0 0 island', () => {
  given([[]]);
  shouldBe(0);
});

test('1*1 0 island', () => {
  given([['0']]);
  shouldBe(0);
});

test('1*1 1 island', () => {
  given([['1']]);
  shouldBe(1);
});

test('2*1 1 island', () => {
  given([['1'], ['1']]);
  shouldBe(1);
});

test('2*2 1 island', () => {
  given([['1', '0'], ['1', '1']]);
  shouldBe(1);
});

test('2*3 1 island (connected by down)', () => {
  given([['1', '0', '1'], ['1', '1', '1']]);
  shouldBe(1);
});

test('2*3 1 island (connected by up)', () => {
  given([['1', '1', '1'], ['1', '0', '1']]);
  shouldBe(1);
});

test('2*3 2 island (connected by up)', () => {
  given([['1', '1', '0'], ['1', '0', '1']]);
  shouldBe(2);
});

test('3*3 4 island(island always size 1)', () => {
  given([
    ['0', '1', '0'],
    ['1', '0', '1'],
    ['0', '1', '0'],
  ]);
  shouldBe(4);
});

test('3*3 5 island(island always size 1)', () => {
  given([
    ['1', '0', '1'],
    ['0', '1', '0'],
    ['1', '0', '1'],
  ]);
  shouldBe(5);
});

test('S turn island', () => {
  given([
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '1', '1', '0', '1'],
  ]);
  shouldBe(1);
});

test('5*4 3 island', () => {
  given([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]);
  shouldBe(3);
});

