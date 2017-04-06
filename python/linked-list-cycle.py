# A singly-linked list is built with nodes, where each node has:

# node.next - the next node in the list.
# node.vale - the data held in the node. For example, if our linked list stores people in line at the movies, node.value might be the person's name.
# For example:

class LinkedListNode:
  def __init__(self, value):
    self.value = value;
    self.next = None;

# a = LinkedListNode('A')
# b = LinkedListNode('B')
# c = LinkedListNode('C')
# d = LinkedListNode('D')

# a.next = b;
# b.next = c;
# c.next = d;

# A cycle occurs when a node's next points back to a previous node in the list. The linked list is no longer linear with a beginning and end-instead, it cycles through a loop of nodes.

# Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

def contains_cycle(node):
  walker = node
  runner = node
  while (runner and runner.next):
    walker = walker.next
    runner = runner.next.next
    if walker is runner:
      return True

  return False

print(contains_cycle(a))