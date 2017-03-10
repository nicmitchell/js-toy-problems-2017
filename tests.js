var assert = chai.assert;
var expect = chai.expect;

describe('Superbalanced binary tree', function() {
  const tree = new BinaryTreeNode(10);
  tree.insertLeft(5);
  tree.insertRight(7);

  it('Can create a binary tree node with a value', function() {
    expect(tree.value).to.equal(10);
  });

  it('Can can insert left and right values', function() {  
    expect(tree.left.value).to.equal(5); 
    expect(tree.right.value).to.equal(7); 
  });

  it('Child nodes are instances of BinaryTreeNode', function() {
    expect(tree.left instanceof BinaryTreeNode).to.be.true;
  });
});
