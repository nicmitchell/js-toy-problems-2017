/* Given an input string, determine if the parens are balanced (return boolean). Parens can be mixed.

Example: 
"I love to use (parens). Sometimes (I [nest {them}] and cause) lots of confusion when writing thank you notes."

Expected output: true

Example:
"I love to use (parens). Sometimes (I [nest {them]} and cause) lots of confusion when writing thank you notes."

Expected output: false

*/

const matchingParensMixed = function(string) {
  const parens = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  let stack = [];
  let balanced = true;

  for (const char of string) {
    for (const openingParen in parens) {
      if (char === openingParen){
        stack.push(char)
      }
      if (char === parens[openingParen]){
        if (stack[stack.length - 1] === openingParen){
          stack.pop();
        } else {
          balanced = false;
        }
      }
    }
  };
  return balanced;
};
