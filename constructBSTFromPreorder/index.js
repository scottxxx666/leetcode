const TreeNode = require("./treeNode");
module.exports = (preorder) => {
  const head = new TreeNode(preorder[0]);
  const prev = [];
  let pointer = head;
  for (let i = 1; i < preorder.length; i++) {
    const target = preorder[i];
    if (target < pointer.val) {
      pointer.left = new TreeNode(target);
      prev.push(pointer);
      pointer = pointer.left;
      continue;
    }
    while (prev.length > 0 && prev[prev.length - 1].val < target) {
      pointer = prev.pop();
    }
    pointer.right = new TreeNode(target);
    pointer = pointer.right;
  }
  return head;
};
