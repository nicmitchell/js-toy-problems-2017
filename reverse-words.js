/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the words in-place.

For example:

var message = 'find you will pain only go you recordings security the into if';

reverseWords(message);
// returns: 'if into the security recordings you go only pain will you find'

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

*/

function reverseWordsCheating(message) {
  return message.split(' ').reverse().join(' ');
}

function reverseWords(message) {
  let arr = message.split('');
  let left = 0;
  let right = message.length - 1;

  while (left < right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }

  let leftChar = 0;
  let rightChar = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      rightChar = i - 1;
      while(leftChar < rightChar) {
        let tmp = arr[leftChar];
        arr[leftChar] = arr[rightChar];
        arr[rightChar] = tmp;
        leftChar++;
        rightChar--;
      }
      leftChar = i + 1;
    }
  }

  return arr.join('');
}