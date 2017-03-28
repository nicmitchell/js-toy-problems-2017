/* 
Suppose we had an array of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?
var ints = [...Array(50).keys()];
ints = ints.concat(ints.map((int) => (int + 1) * 100));
*/

function findInArray(int, array) {
  var target = Math.floor(array.length / 2);
  var searchArray = array.slice();
  
  if (int > array[array.length - 1] || int < array[0]) {
    return false;
  }

  while (target > 0) {
    if (int === searchArray[target]) {
      return true;
    }
    if (int > searchArray[target]) {
      searchArray = searchArray.slice(target);
    } else {
      searchArray = searchArray.slice(0, target);
    }
    target = Math.floor(searchArray.length / 2);
  }

  return false;
}
