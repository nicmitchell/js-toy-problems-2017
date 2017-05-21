/*

On a word-by-word basis, if our list is parts = ["An","a","men", "ing", "ie","mel","me"] then we would indicate substrings in the following way:

“word” becomes “word” (there is no substring of “word” in parts)
“anticipating” becomes “anticipat[ing]” (the substrings “a” and “ing” both appear, but “ing” is longer)
“interest” becomes “interest”
“metro” becomes “[me]tro”
“melrose” becomes “[mel]rose”
“melting” becomes “[mel]ting” (“mel” and “ing” are the same length, but “mel” appears first in the word)
“ingoltsmelt” becomes “[ing]oltsmelt”

Our function, findSubstrings, should take a list of strings words and another list of strings parts, and return the list of words with the longest substring indicated. For example, with words = ["word", "anticipating", "ingolt", "melting"], and parts defined as before we would get:


['word', 'anticipat[ing]', '[ing]olt', '[mel]ting']

const parts = ['An','a','men', 'ing', 'ie','mel','me'];
const words = ['word', 'anticipating', 'ingolt', 'melting'];

 */

function findSubstrings(words, parts) {
  const results = [];
  words.forEach((word) => {
    const possibleParts = []; // keep track of parts found as substrings
    for (let i = 0; i < word.length; i++) {
      parts.forEach((part) => {
        let wordIdx = i; // stay on char in Word at high level, iterate locally through part
        let valid = true;
        let beginning = null;
        for (let j = 0; j < part.length; j++) {
          if (word[wordIdx] === part[j]) {
            if (beginning === null) {
              beginning = wordIdx;
            }
            wordIdx++;
          } else {
            valid = false;
            break;
          }
        }
        if (valid) {
          // add as an option
          possibleParts.push({ part, beginning });
        }
      })
    }
    if (possibleParts.length > 0) {
      const longestSubstring = possibleParts.reduce((previous, current) => {
        return (current.part.length > previous.part.length) ? current : previous;
      });
      const firstSlice = `${word.slice(0, longestSubstring.beginning)}`;
      const partInBrackets = `[${longestSubstring.part}]`;
      const secondSlice = `${word.slice(longestSubstring.beginning + longestSubstring.part.length)}`;
      const resultWord = `${firstSlice}${partInBrackets}${secondSlice}`;
      results.push(resultWord);
    }
  });
  return results;
}
