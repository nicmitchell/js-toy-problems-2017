/*
You created a game that is more popular than Angry Birds.
You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

For example:

  var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [37, 41, 53, 65, 89, 91]

We’re defining nn as the number of unsortedScores because we’re expecting the number of players to keep climbing.

And we'll treat highestPossibleScore as a constant instead of factoring it into our big O time and space costs, because the highest possible score isn’t going to change. Even if we do redesign the game a little, the scores will stay around the same order of magnitude.
*/

function sortedScores(scores, highest) {
  const unsortedScores = [];
  const sortedScores = [];

  for (let i = 0; i < highest; i++) {
    unsortedScores.push(0)
  }

  scores.forEach((score) => {
    unsortedScores[score]++;
  });

  unsortedScores.forEach((score, idx) => {
    if (score) {
      for (let i = 0; i < score; i++) {
        sortedScores.push(idx);
      }
    }
  });

  return sortedScores;
}
