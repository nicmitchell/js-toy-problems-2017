/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
 */

let ints1 = [1,2,3,5,2]; 
// expected result: 30

let ints2 = [2,7,10,3,4]; 
// expected result: 280

let arrayOfInts = (array) => {
  array.sort((a, b) => {
    return b - a;  
  })
  return array[0] * array[1] * array [2];
};

let arrayOfIntsIterate = (array) => {
  let highestProductOf2 = array[0] * array [1];
  let highestTotal = highestProductOf2 * array[2];
  let highest = Math.max(array[0], array[1]);

  array.forEach((number, idx) => {
    if (idx > 1) {
      highestTotal = Math.max(highestTotal, highestProductOf2 * number);
      highestProductOf2 = Math.max(highestProductOf2, highest * number);
      highest = Math.max(highest, number);
    }
  });

  return highestTotal;
};

