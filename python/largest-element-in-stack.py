# You want to be able to access the largest element in a stack.
# You've already implemented the Stack class below.
# Use your Stack class to implement a new class MaxStack with a function 
# get_max() that returns the largest element in the stack. 
# get_max() should not remove the item.
# Your stacks will contain only integers.

class Stack:

  # initialize an empty list
  def __init__(self):
      self.items = []

  # push a new item to the last index
  def push(self, item):
      self.items.append(item)

  # remove the last item
  def pop(self):
      # if the stack is empty, return None
      # (it would also be reasonable to throw an exception)
      if not self.items:
        return None
      return self.items.pop()

  # see what the last item is
  def peek(self):
      if not self.items:
        return None
      return self.items[-1]

class MaxStack:
  def __init__(self):
    self.highs = Stack()
    self.stack = Stack()

  def get_max(self):
    if not self.highs.items:
      return None
    return self.highs.items[-1]['int']

  def push(self, item):
    self.stack.push(item)
    if not self.highs.items:
      self.highs.push({ 'int': item, 'count': 1 })
    else:
      highest = self.highs.peek()
      if item > highest['int']:
        self.highs.push({ 'int': item, 'count': 1 })
      if item == highest['int']:
        self.highs.items[-1]['count'] += 1

  def pop(self):
    item = self.stack.pop()
    highest = self.highs.peek()
    if item == highest['int']: 
      if highest['count'] > 1:
        highest['count'] -= 1
      else:
        self.highs.pop()
