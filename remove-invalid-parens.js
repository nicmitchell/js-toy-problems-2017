/*

 Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Examples:
"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]
*/

const removeInvalidParentheses = (string) => {

  const isValid = (string) => {
    let result = 0;
    for (const char of string) {
      if (char === '(') {
        result++;
      }
      if (char === ')') {
        result--;
      }
      if (result < 0) {
        return false;
      }
    }
    return result === 0;
  };

  const traverseString = (stringRemaining, accumulator, leftCount, maxLeft, subResult) => {
    if (stringRemaining.length === 0) {
      const validString = isValid(accumulator);
      if (validString && leftCount === 0) {
        maxTotal = Math.max(maxLeft, maxTotal);
        if (maxLeft === maxTotal) {
          return accumulator;
        }
      }
      return;
    }
    if (stringRemaining[0] === '(') {
      traverseString(stringRemaining.slice(1), accumulator + '(', leftCount + 1, maxLeft + 1, subResult);
      traverseString(stringRemaining.slice(1), accumulator, leftCount, maxLeft, subResult);
    } else if (stringRemaining[0] === ')') {
      if (leftCount > 0) {
        traverseString(stringRemaining.slice(1), accumulator + ')', leftCount - 1, maxLeft, subResult);
      }
      traverseString(stringRemaining.slice(1), accumulator, leftCount, maxLeft, subResult);
    } else {
      traverseString(stringRemaining.slice(1), accumulator + stringRemaining[0], leftCount, maxLeft, subResult);
    }
  };

  let maxTotal = 0;
  const result = {};

  traverseString(string, '', 0, 0, result);

  return Object.keys(result);
};
