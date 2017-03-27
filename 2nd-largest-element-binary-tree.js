/* 
Write a function to find the 2nd largest element in a binary search tree.
Here's a sample binary tree node class:
*/

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function find2ndLargest(node) {
  if (!node || (!node.left && !node.right)) {
    throw new Error('Must have at least 2 nodes');
  }

  function findLargest(node) {
    if (node.right) {
      return findLargest(node.right);
    }
    return node;
  }

  // found highest value, search left sub-tree
  if (!node.right && node.left) {
    return findLargest(node.left);
  }

  // found parent of highest value with no left sub-tree
  if (node.right && !node.right.left && !node.right.right) {
    return node;
  }

  return find2ndLargest(node.right);
}
