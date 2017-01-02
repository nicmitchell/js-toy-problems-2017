/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
 */

let ints = [1,2,3,5,2];

let arrayOfInts = (array) => {
  array.sort((a, b) => {
    return b - a;  
  })
  return array[0] * array[1] * array [2];
};
