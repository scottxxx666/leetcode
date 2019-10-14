const intToRoman = require('./intToRoman');

let result;

function given(a) {
  result = intToRoman(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1', () => {
  given(1);
  shouldBe('I');
});

test('5', () => {
  given(5);
  shouldBe('V');
});

test('10', () => {
  given(10);
  shouldBe('X');
});

test('50', () => {
  given(50);
  shouldBe('L');
});

test('100', () => {
  given(100);
  shouldBe('C');
});

test('500', () => {
  given(500);
  shouldBe('D');
});

test('1000', () => {
  given(1000);
  shouldBe('M');
});

test('4', () => {
  given(4);
  shouldBe('IV');
});

test('9', () => {
  given(9);
  shouldBe('IX');
});

test('40', () => {
  given(40);
  shouldBe('XL');
});

test('99', () => {
  given(90);
  shouldBe('XC');
});

test('400', () => {
  given(400);
  shouldBe('CD');
});

test('900', () => {
  given(900);
  shouldBe('CM');
});

test('2', () => {
  given(2);
  shouldBe('II');
});

test('8', () => {
  given(8);
  shouldBe('VIII');
});

test('19', () => {
  given(19);
  shouldBe('XIX');
});

test('1994', () => {
  given(1994);
  shouldBe('MCMXCIV');
});

test('3999', () => {
  given(3999);
  shouldBe('MMMCMXCIX');
});

