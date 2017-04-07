/*
Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list ↴ . Do it in-place ↴ .

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

/*
var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;
*/

function reverseLinkedList(node) {
  let current = node;
  let next = null;
  let previous = null;

  while (current) {
    next = current.next;
    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
}
