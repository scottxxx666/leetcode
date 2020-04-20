const TreeNode = require("./treeNode");

function insert(head, num) {
  if (head.val > num) {
    if (head.left === null) {
      head.left = new TreeNode(num);
      return;
    }
    return insert(head.left, num);
  }
  if (head.right === null) {
    head.right = new TreeNode(num);
    return;
  }
  return insert(head.right, num);
}

module.exports = (preorder) => {
  const head = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    insert(head, preorder[i]);
  }
  return head;
};
