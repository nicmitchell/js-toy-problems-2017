/* Write a function to reverse a string in-place.
Since strings in JavaScript are immutable, first convert the string into an array of characters, do the in-place reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge.
*/

function reverseStringInPlaceLongFor(str) {
  let arr = str.split('');
  const halfway = Math.floor(arr.length / 2);

  for (let i = 0, j = arr.length - 1; i < halfway; i++, j--) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr.join('');
}

function reverseStringInPlaceEdges(str) {
  let arr = str.split('');
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }

  return arr.join('');
}

function reverseStringInPlaceMiddleOut(str) {
  let arr = str.split('');
  let halfway = Math.floor(arr.length / 2);
  let offset = 0;

  while (offset++ < halfway) {
    let left = arr[halfway - offset];
    let right = arr[halfway + offset];
    let tmp = left;
    arr[halfway - offset] = right;
    arr[halfway + Math.abs(offset)] = tmp;
  }
  return arr.join('');
}
