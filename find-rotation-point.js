/*

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. 
This array is huge (there are lots of words I don't know) so we want to be efficient here.
var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',floor 
  'asymptote', // <-- rotates here! 
  'babka',
  'banoffee',ceiling
  'engender',
  'karpatka',
  'othellolagkage',
];
 */

function findRotationPoint(array) {
  var floor = 0;
  var ceiling = array.length - 1;
  var target = Math.floor(ceiling / 2);
  
  while(target !== floor) {
    if (array[target].charCodeAt(0) > array[floor].charCodeAt(0)) {
      floor = target;
      target = Math.floor((floor + ceiling) / 2);
    } 
    if (array[target].charCodeAt(0) < array[floor].charCodeAt(0)) {
      ceiling = target;
      target = Math.floor((floor + ceiling) / 2);
    }
  }

  if (array[floor].charCodeAt(0) < array[ceiling].charCodeAt(0)) {
    target = floor;
  } else {
    target = ceiling;
  }
  return target;
}
