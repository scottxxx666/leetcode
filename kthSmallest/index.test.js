const kthSmallest = require("./index");
const TreeNode = require("./treeNode");

let result;

function createTree(arr, i) {
  if (i >= arr.length || arr[i] === null) {
    return null;
  }
  const head = new TreeNode(arr[i]);
  head.left = createTree(arr, i * 2 + 1);
  head.right = createTree(arr, i * 2 + 2);
  return head;
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

function given(root, k) {
  const head = createTree(root, 0);
  result = kthSmallest(head, k);
}

test('1 num', function () {
  given([1], 1);
  shouldBe(1);
});

test('2 num find 1', function () {
  given([2, 1], 1);
  shouldBe(1);
});

test('2 num find 2', function () {
  given([2, 1], 2);
  shouldBe(2);
});

test('3 num find 2', function () {
  given([2, 1, 3], 2);
  shouldBe(2);
});

test('contain null', function () {
  given([3, 2, null, 1], 3);
  shouldBe(3);
});

test('height 3 contain null', function () {
  given([3, 1, 4, null, 2], 1);
  shouldBe(1);
});

test('height 4 contain null', function () {
  given([5, 3, 6, 2, 4, null, null, 1], 3);
  shouldBe(3);
});

