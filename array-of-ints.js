/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
 */

let ints1 = [1,2,3,5,2]; 
// expected result: 30

let ints2 = [2,7,10,3,4]; 
// expected result: 280

let ints3 = [2,-7,10,3,4,-10]; 
// expected result: 700

let ints4 = [-2,7,10,-3,-4,-10]; 
// expected result: 400

let arrayOfInts = (array) => {
  array.sort((a, b) => {
    return b - a;  
  })
  return array[0] * array[1] * array [2];
};

let arrayOfIntsMax = (array) => {
  let highestProductOf2 = array[0] * array [1];
  let highest = Math.max(array[0], array[1]);

  let lowestProductOf2 = array[0] * array [1];
  let lowest = Math.min(array[0], array[1]);

  let highestTotal = highestProductOf2 * array[2];

  array.forEach((number, idx) => {
    if (idx > 1) {
      highestTotal = Math.max(highestTotal, highestProductOf2 * number, lowestProductOf2 * number);

      highestProductOf2 = Math.max(highestProductOf2, highest * number, lowest * number);
      highest = Math.max(highest, number);

      lowestProductOf2 = Math.min(lowestProductOf2, highest * number, lowest * number);
      lowest = Math.min(lowest, number);
    }
  });

  return highestTotal;
};

let arrayOfIntsIfs = (array) => {
  let highestProductOf2 = array[0] * array[1];
  let highestTotal = highestProductOf2 * highestProductOf2;
  let highest = (array[0] > array[1]) ? array[0] : array[1];

  for (let i = 2; i < array.length; i++) {
    highestTotal = (highestProductOf2 * array[i] > highestTotal) ? highestProductOf2 * array[i] : highestTotal;
    highestProductOf2 = (highest * array[i] > highestProductOf2) ? highest * array[i] : highestProductOf2;
    highest = (array[i] > highest) ? array[i] : highest;
  }

  return highestTotal;
}
