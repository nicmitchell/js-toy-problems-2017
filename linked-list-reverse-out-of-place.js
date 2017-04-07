/* Revers a linked list without doing it in place */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedListOutOfPlace(node) {
  let current = node;
  let previous = null;
  let leadingLeft = null;

  while (current) {
    leadingLeft = new LinkedListNode(current.value);
    leadingLeft.next = previous;
    previous = leadingLeft;
    current = current.next;
  }

  return leadingLeft;
}
