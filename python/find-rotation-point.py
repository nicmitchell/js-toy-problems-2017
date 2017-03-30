#!/user/bin/python
# Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. 
# This array is huge (there are lots of words I don't know) so we want to be efficient here.
words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist', 
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]
import math

def find_rotation_point(words):
  floor = 0;
  ceiling = len(words) - 1;

  while floor < ceiling:
    target = floor + ceiling / 2
    if words[target] > words[0]:
      floor = target
    else:
      ceiling = target
    if floor + 1 == ceiling:
      break

  if words[0] < words[ceiling]:
    return 0
  else:
    return ceiling

print find_rotation_point(words)