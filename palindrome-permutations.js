/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return True
"ivicc" should return True
"civil" should return False
"livci" should return False
*/

function palindromePermutations(string) {
  let orphans = new Set();
  for (let char of string) {
    if (orphans.has(char)) {
      orphans.delete(char)
    } else {
      orphans.add(char)
    }
  }
  return orphans.size <= 1;
}
