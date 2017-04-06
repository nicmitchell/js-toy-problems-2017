# Delete a node from a singly-linked list, given only a variable pointing to that node.
# The input could, for example, be the variable b below:

# class LinkedListNode:

#   def __init__(self, value):
#     self.value = value
#     self.next  = None

# a = LinkedListNode('A')
# b = LinkedListNode('B')
# c = LinkedListNode('C')

# a.next = b
# b.next = c

# delete_node(b)

def delete_node(node):
  node.value = node.next.value
  node.next = node.next.next
  return node
