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

function find2ndLargestElement(node) {
  function findLargest(node, parentNode) {
    if (!node.right) {
      return { largestNode: node, parentNode: parentNode };
    }
    return findLargest(node.right, node);
  }

  var largest = findLargest(node.right, node);
  var secondLargest;

  if (largest.left) {
    secondLargest = findLargest(largest.left, node).largestNode;
  } else {
    secondLargest = largest.parent;
  }

  return secondLargest;
}
