const diameterOfBinaryTree = require("./index");
const TreeNode = require("./treeNode");

let root;

function createTree(arr, i) {
  if (i >= arr.length || arr[i] === null) {
    return null;
  }
  const root = new TreeNode(arr[i]);
  root.left = createTree(arr, i * 2 + 1);
  root.right = createTree(arr, i * 2 + 2);
  return root;
}

function given(arr) {
  root = createTree(arr, 0);
}

function shouldReturn(expected) {
  expect(diameterOfBinaryTree(root)).toBe(expected);
}

test('empty', function () {
  given([]);
  shouldReturn(0);
});

test('1 num', function () {
  given([0]);
  shouldReturn(0);
});

test('2 num', function () {
  given([0, 1]);
  shouldReturn(1);
});

test('3 num', function () {
  given([0, 1, 2]);
  shouldReturn(2);
});

test('4 num', function () {
  given([0, 1, 2, 3]);
  shouldReturn(3);
});

test('5 num but only 3', function () {
  given([0, 1, 2, 3, 4]);
  shouldReturn(3);
});

test('5 num return 4', function () {
  given([0, 1, 2, 3, null, null, 4]);
  shouldReturn(4);
});

test('5 num return 4 case2', function () {
  given([0, 1, 2, 3, null, 4]);
  shouldReturn(4);
});

