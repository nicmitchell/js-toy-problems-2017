# Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
# Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.

# Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

class Stack:
  def __init__(self):
    self.stack = []
  def push(self, value):
    self.stack.append(value)
  def pop(self):
    return self.stack.pop();


class Queue:
  """ A queue implemented with two stacks """
  def __init__(self):
    self.storage = Stack()
    self.offload = Stack()

  def enqueue(self, value):
    self.storage.push(value)

  def dequeue(self):
    if len(self.offload.stack) == 0:
      while len(self.storage.stack):
        item = self.storage.stack.pop()
        self.offload.push(item)
    return self.offload.pop()
