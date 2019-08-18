const invertTree = require('./invertTree');
const TreeNode = require('./treeNode.js');

let result;

function given(arr) {
  result = expect(invertTree(createTree(arr)));
}

function shouldBe(arr) {
  result.toStrictEqual(createTree(arr));
}

test('0 Node', () => {
  given([]);
  shouldBe([]);
});

test('1 Node', () => {
  given([0]);
  shouldBe([0]);
});

test('3 Node', () => {
  given([0, 1, 2]);
  shouldBe([0, 2, 1]);
});

test('3 Depth', () => {
  given([0, 1, 2, 3, 4, 5, 6]);
  shouldBe([0, 2, 1, 6, 5, 4, 3]);
});

test('3 Depth include null', () => {
  given([0, 1, 2, 3, null, 5, 6]);
  shouldBe([0, 2, 1, 6, 5, null, 3]);
});

const createTree = (arr, index = 0) => {
  if (arr.length <= 0 || index >= arr.length) {
    return null;
  }
  let root = new TreeNode(arr[index]);
  root.left = createTree(arr, 2 * index + 1);
  root.right = createTree(arr, 2 * index + 2);
  return root;
};

const array = (root) => {
  let result = [];
  if (root === null) {
    return [];
  }
  let queue = [root];
  while (queue.length !== 0) {
    const pointer = queue.shift();
    result.push(pointer.val);
    if (pointer.left !== null) {
      queue.push(pointer.left);
    }
    if (pointer.right !== null) {
      queue.push(pointer.right);
    }
  }
  return result;
};