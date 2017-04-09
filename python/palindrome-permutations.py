# Write an efficient function that checks whether any permutation of an input string is a palindrome.
# You can assume the input string only contains lowercase letters.

# Examples:

# "civic" should return True
# "ivicc" should return True
# "civil" should return False
# "livci" should return False

def palidrome_permutations(string):
  orphans = set();
  for char in string:
    if char in orphans:
      orphans.remove(char)
    else:
      orphans.add(char)
  return len(orphans) <= 1
