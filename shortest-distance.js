/*

 Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/

var shortestDistance = function(words, word1, word2) {
    var words1 = []; // [1, 4]
    var words2 = []; // [3, 10]
    var result = null;
    words.forEach(function(word, idx) {
       if (word === word1) {
           words1.push(idx)
       }
       if (word === word2) {
           words2.push(idx)
       }
    });
    words1.forEach(function(idx1){
        words2.forEach(function(idx2) {
            result = (!result) ? Math.abs(idx1 - idx2) : Math.min(result, Math.abs(idx1 - idx2));
        })
    });
  
    return result;
};
