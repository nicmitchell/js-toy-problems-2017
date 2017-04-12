/*
Write a function for doing an in-place ↴ shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * ceiling);
}

function shuffleInPlace(items) {
  let length = items.length - 1;
  while (length > 0) {
    let random = getRandom(0, length);
    let tmp = items[length];
    items[length] = items[random];
    items[random] = tmp;
    length--;
  }
  return items;
}
