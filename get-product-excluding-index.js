/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7*3*4, 1*3*4, 1*7*4, 1*7*3]

Do not use division in your solution.
*/

let numbers = [1, 7, 3, 4];

let getProductsOfAllIntsExceptAtIndex = (numbers) => {
  return numbers.map((number, idx, array) => {
    return array.reduce((acc, innerNumber, innerIdx) => {
      return (idx !== innerIdx) ? (acc * innerNumber) : acc;
    });
  });
};

/* O(n) solution */

let getProductsOfAllIntsExceptAtIndex2 = (numbers) => {
  let productSoFar = 1;
  let productSoFarReverse = 1;
  let productsBeforeIndex = [];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    productsBeforeIndex[i] = productSoFar;
    productSoFar *= numbers[i];
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    result[i] = productsBeforeIndex[i] * productSoFarReverse;
    productSoFarReverse *= numbers[i];
  }

  return result;
};
