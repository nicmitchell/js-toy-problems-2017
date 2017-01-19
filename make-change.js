/* 
Write a function that, given:

1. an amount of money
2. an array of coin denominations

computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/


const denominations = [1,2,3];

const makeChange = (amount, denominations) => {
  let result = 0;

  const subroutine = (running) => {
    if (running === amount) {
      return result++;
    }
    if (running > amount) {
      return false;
    }
    return denominations.forEach((item) => {
      return subroutine(running + item)
    });
  }

  subroutine(denominations[0]);

  return result;
}
