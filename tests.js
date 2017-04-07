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
    expect(words.length % 2 === 1).to.be.true;
    expect(findRotationPoint(words)).to.equal(5);
  });
  it('Should find the index of the first word alphabetically when array is even', function(){
    var words2 = words.slice(1);
    expect(words2.length % 2 === 0).to.be.true;
    expect(findRotationPoint(words2)).to.equal(4);
    var words3 = ['pussilaminous', 'querulous', ...words2];
    expect(findRotationPoint(words3)).to.equal(6);
  });

  it('Should detect if the first word searched is the proper choice', function(){
    var words2 = words.slice();
    expect(findRotationPoint(words2)).to.equal(5);
  });

  it('Should detect if item is first word in array', function(){
    var words4 = [
      'asymptote', // <-- rotates here!
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
    ];
    expect(findRotationPoint(words4, true)).to.equal(0);
  });

  it('Should detect if item is last word in array', function(){
    var words4 = [
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote', // <-- rotates here!
    ];
    expect(findRotationPoint(words4, true)).to.equal(10);
  });

});

describe('Bit Manipulations', function(){
  it('Should identify the bit value at a specified index', function(){
    expect(getIthBit(8, 0)).to.equal(0);
    expect(getIthBit(8, 1)).to.equal(0);
    expect(getIthBit(8, 3)).to.equal(1);
  });
  it('Should set the bit value at a specified index', function(){
    expect(setIthBit(8, 0)).to.equal(9);
    expect(setIthBit(8, 2)).to.equal(12);
  });
  it('Should set the bit value at a specified index', function(){
    expect(setIthBit(8, 0)).to.equal(9);
    expect(setIthBit(8, 2)).to.equal(12);
  });
  it('Should clear the bit value at a specified index', function(){
    expect(clearIthBit(8, 0)).to.equal(8);
    expect(clearIthBit(8, 3)).to.equal(0);
  });
  it('Should clear the rightmost bit value', function(){
    expect(clearRightmostBit(8)).to.equal(0);
    expect(clearRightmostBit(9)).to.equal(8);
  });
  it('Should detect parity of bits (even/odd number of bits)', function(){
    expect(getParity(15)).to.be.true;
    expect(getParity(8)).to.be.false;
    expect(getParity(9)).to.be.true;
  });
  it('Should detect Hamming distance of two bit sets', function(){
    expect(getHammingDistance(4, 1)).to.equal(2);
    expect(getHammingDistance(15, 1)).to.equal(3);
    expect(getHammingDistance(8, 5)).to.equal(3);
  });
});

describe('Linked Lists', function(){
  it('Should delete a node', function(){

    var a = new LinkedListNode('A');
    var b = new LinkedListNode('B');
    var c = new LinkedListNode('C');

    a.next = b;
    b.next = c;

    deleteNode(b);

    var result = new LinkedListNode('A');
    result.next = c;

    expect(a).to.eql(result);
  });

  it('Should detect a cycle', function(){
    var a = new LinkedListNode('A');
    var b = new LinkedListNode('B');
    var c = new LinkedListNode('C');
    var d = new LinkedListNode('D');

    a.next = b;
    b.next = a;
    c.next = d;

    expect(containsCycle(a)).to.be.true;
    
  });
  it('Should be able to reverse in place', function(){
    var a = new LinkedListNode('A');
    var b = new LinkedListNode('B');
    var c = new LinkedListNode('C');
    var d = new LinkedListNode('D');

    a.next = b;
    b.next = c;
    c.next = d;

    var revD = new LinkedListNode('D');
    var revC = new LinkedListNode('C');
    var revB = new LinkedListNode('B');
    var revA = new LinkedListNode('A');

    revD.next = revC;
    revC.next = revB;
    revB.next = revA;

    expect(reverseLinkedList(a)).to.eql(revD);
  });
  it('Should be able to reverse without mutating', function(){
    var a = new LinkedListNode('A');
    var b = new LinkedListNode('B');
    var c = new LinkedListNode('C');
    var d = new LinkedListNode('D');

    a.next = b;
    b.next = c;
    c.next = d;

    var revD = new LinkedListNode('D');
    var revC = new LinkedListNode('C');
    var revB = new LinkedListNode('B');
    var revA = new LinkedListNode('A');

    revD.next = revC;
    revC.next = revB;
    revB.next = revA;

    expect(reverseLinkedListOutOfPlace(a)).to.eql(revD);

    var aCopy = new LinkedListNode('A');
    var bCopy = new LinkedListNode('B');
    var cCopy = new LinkedListNode('C');
    var dCopy = new LinkedListNode('D');

    aCopy.next = b;
    bCopy.next = c;
    cCopy.next = d;

    expect(a).to.eql(aCopy);
  });

  it('Should find the kth item', function(){
    var a = new LinkedListNode("Angel Food");
    var b = new LinkedListNode("Bundt");
    var c = new LinkedListNode("Cheese");
    var d = new LinkedListNode("Devil's Food");
    var e = new LinkedListNode("Eccles");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(kthToLastNode(2, a).value).to.eql("Devil's Food");
  });
});

describe('String Manipulations', function(){
  it('Should reverse a string in place', function(){

    var str = 'You are the puppy of my dreams';
    var result = 'smaerd ym fo yppup eht era uoY';

    expect(reverseStringInPlaceLongFor(str)).to.eql(result);
  });
});