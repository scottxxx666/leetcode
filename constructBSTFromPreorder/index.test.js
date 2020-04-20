const bstFromPreorder = require("./index");
const Node = require("./treeNode");

let result;

function given(preorder) {
  result = bstFromPreorder(preorder);
}

function createTree(expected, i) {
  if (i >= expected.length || expected[i] === null) {
    return null;
  }
  const head = new Node(expected[i]);
  head.left = createTree(expected, i * 2 + 1);
  head.right = createTree(expected, i * 2 + 2);
  return head;
}

function shouldBe(expected) {
  let head = createTree(expected, 0);
  expect(result).toStrictEqual(head);
}

test('1', function () {
  given([1]);
  shouldBe([1]);
});

test('2 desc', function () {
  given([2, 1]);
  shouldBe([2, 1]);
});

test('2 asc', function () {
  given([1, 2]);
  shouldBe([1, null, 2]);
});

test('6', function () {
  given([8, 5, 1, 7, 10, 12]);
  shouldBe([8, 5, 10, 1, 7, null, 12]);
});

