/* 
Suppose we had an array of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?
*/

function findInArray(int, array) {
  var ceiling = array.length - 1;
  var target = Math.floor(ceiling / 2);
  var floor = -1;
  
  if (int > array[ceiling] || int < array[0]) {
    return false;
  }

  while (ceiling > (floor + 1)) {
    if (int === array[target]) {
      return true;
    }
    if (int > array[target]) {
      floor = target;
    } else {
      ceiling = target;
    }
    target = Math.floor((floor + ceiling) / 2);
  }

  return false;
}
