/*
I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.
*/


function findDuplicateInRange(numbers) {
  // (n^2 + n) / 2 to find expected sum of triangular series
  const highest = numbers[numbers.length - 1];
  const expectedSum = (Math.pow(highest, 2) + highest) / 2;
  const actualSum = numbers.reduce((prev, current) => {
   return prev + current; 
  });
  return actualSum - expectedSum;
}
