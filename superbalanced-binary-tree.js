/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

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

function checkSuperBalanced(tree) {
  let lowestDepth = 0;
  let highestDepth = 0;

  function subroutine(node, depth) {
    if (!node.left && !node.right) {
      lowestDepth = Math.min(lowestDepth, depth);
      highestDepth = Math.max(highestDepth, depth);
      return depth;
    }

    depth++;
    
    if (node.left) {
      return subroutine(node.left, depth);
    }
    
    if (node.right) {
      return subroutine(node.right, depth);
    }
  }

  function areEqual(lowest, highest) {
    return lowest + 1 === highest || lowest === highest;
  }

  subroutine(tree, 0);
  return areEqual(lowestDepth, highestDepth);
}
