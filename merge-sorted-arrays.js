/*
In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

function mergeSortedArray(myArray, otherArray) {
  const results = [];
  const combinedMax = myArray.length + otherArray.length;
  const myMax = myArray.length;
  const otherMax = otherArray.length;
  let myIdx = 0;
  let otherIdx = 0;

  while (results.length < combinedMax) {
    if (myIdx < myMax && (otherIdx === otherMax || myArray[myIdx] < otherArray[otherIdx])) {
      results.push(myArray[myIdx]);
      myIdx++;
      continue;
    }
    if (otherIdx < otherMax && (myIdx === myMax || otherArray[otherIdx] < myArray[myIdx])) {
      results.push(otherArray[otherIdx]);
      otherIdx++;
      continue;
    }
  }

  return results;
}

