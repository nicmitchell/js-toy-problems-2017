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

function findRotationPoint(array, words4) {
  var floor = 0;
  var ceiling = array.length - 1;

  while(floor < ceiling) {
    var target = Math.floor((floor + ceiling) / 2);
    if (array[target] > array[0]) {
      floor = target;
    } else {
      ceiling = target;
    }
    if (floor + 1 === ceiling) {
      break;
    }
  }

  return (array[0] < array[ceiling]) ? 0 : ceiling;
 }

