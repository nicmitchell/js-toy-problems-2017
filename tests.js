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

  it('Can detect superbalanced tree', function() {
    const superbalanced = checkSuperBalanced(tree);
    expect(superbalanced).to.be.true;
  });

  it('Can detect an imbalanced tree', function() {
    tree.insertLeft(6).insertLeft(8).insertLeft(10);
    const notBalanced = checkSuperBalanced(tree);
    expect(notBalanced).to.be.false;
  });
});

describe('Sort array', function(){
  var ints = [...Array(50).keys()];
  ints = ints.concat(ints.map((int) => (int + 1) * 100));
  it('Should detect an item present', function(){
    expect(findInArray(500, ints)).to.be.true;
  });
  it('Should detect when an item is not present', function(){
    expect(findInArray(501, ints)).to.be.false;
  });
});

describe('Find rotation point', function(){
  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

  it('Should find the index of the first word alphabetically when array is odd', function(){
    expect(findRotationPoint(words)).to.equal(5);
  });
  it('Should find the index of the first word alphabetically when array is even', function(){
    var words2 = words.slice(0, words.length - 1);
    var words3 = words.slice(2);
    expect(findRotationPoint(words2)).to.equal(5);
    expect(findRotationPoint(words3)).to.equal(3);
  });
});