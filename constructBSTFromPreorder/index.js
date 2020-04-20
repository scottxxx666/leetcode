const TreeNode = require("./treeNode");
module.exports = function bstFromPreorder(preorder) {
  let i = 0;

  function build(max) {
    if (i >= preorder.length || preorder[i] > max) {
      return null;
    }
    const node = new TreeNode(preorder[i]);
    node.left = build(preorder[i++]);
    node.right = build(max);
    return node;
  }

  return build(preorder, Number.MAX_SAFE_INTEGER);
};
