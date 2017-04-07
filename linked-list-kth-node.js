/* 
You have a linked list ↴ and want to find the kkth to last node.
Write a function kthToLastNode() that takes an integer kk and the headNode of a singly linked list, and returns the kkth to last node in the list.

For example:

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)
*/

function kthToLastNode(k, node){
  let currentNode = node;
  let kthNode = node;
  let count = 0;

  while(currentNode){
    currentNode = currentNode.next;
    if (count === k) {
      kthNode = kthNode.next;
    } else {
      count++;
    }
  }

  return kthNode;
}
