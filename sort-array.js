/* 
Suppose we had an array of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?
var ints = [...Array(50).keys()];
ints = ints.concat(ints.map((int) => (int + 1) * 100));
*/

function findInArray(int, array) {
  var target = Math.floor(array.length / 2);
  if (int > array[array.length - 1] || int < array[0]) {
    return false;
  }
  if (int === array[target]) {
    return true;
  }
  if (int > array[target]) {
    return findInArray(int, array.slice(target));
  } else {
    return findInArray(int, array.slice(0, target));
  }
  return false;
}
