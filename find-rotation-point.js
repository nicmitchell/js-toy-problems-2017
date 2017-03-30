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
  
  while(floor < ceiling) {
    var target = Math.floor(floor + ((ceiling - floor) / 2));
    if (floor + 1 === ceiling) {
      break;
    }
    if (array[target] >= array[0]) {
      floor = target;
    } else {
      ceiling = target;
    }
  }

  return ceiling;
}

