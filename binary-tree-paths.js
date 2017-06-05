/*Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const binaryTreePaths = (root) => {
  const result = [];
  const subroutine = (node, soFar) {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      result.push(soFar += node.val);
      return result;
    }
    soFar += node.val + '->';
    subroutine(node.left, soFar);
    subroutine(node.right, soFar);
  };
  subroutine(root, '');
  return result;
};

