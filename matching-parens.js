/* Given a string input and a starting position for an opening parens, return the position of the corresponding closing parens.

Example string: "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
Example input: 10 (position for the opening parens)
Expected output: 79 (position for the corresponding closing parens)

*/

const matchingParens = function(position, string) {
  let total = 0;
  for (let i = position; i < string.length; i++){
    if (string[i] === '(') {
      total++;
    }
    if (string[i] === ')') {
      total--;
    }
    if (total === 0) {
      return i;
    }
  }
  return "Parens do not match :(";
}
