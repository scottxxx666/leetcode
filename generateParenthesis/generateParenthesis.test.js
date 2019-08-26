const generateParenthesis = require('./generateParenthesis');

let result;

function given(n) {
  result = expect(generateParenthesis(n).sort());
}

function shouldBe(strings) {
  result.toEqual(strings.sort());
}

test('1 parenthesis', () => {
  given(1);
  shouldBe(['()']);
});

test('2 parenthesis', () => {
  given(2);
  shouldBe(['(())', '()()']);
});

test('3 parenthesis', () => {
  given(3);
  shouldBe(['((()))', '(()())', '(())()', '()(())', '()()()']);
});

test('4 parenthesis', () => {
  given(4);
  shouldBe([
    "(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())",
    "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()",
    "()()(())", "()()()()"
  ]);
});
