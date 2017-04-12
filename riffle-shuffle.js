/*
I figured out how to get rich: online poker.
I suspect the online poker game I'm playing shuffles cards by doing a single "riffle."

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..52 (since there are 5252 distinct cards in a deck).

Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy cake obsession" (even though it's too late now because she let me go and she's never getting me back).
*/

function isRiffleShuffle(shuffledDeck, half1, half2) {
  let currentHalf1 = 0;
  let currentHalf2 = 0;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (shuffledDeck[i] !== half1[currentHalf1] && shuffledDeck[i] !== half2[currentHalf2]) {
      return false;
    }
    if (shuffledDeck[i] === half1[currentHalf1]){
      currentHalf1++;
    } 
    if (shuffledDeck[i] === half2[currentHalf2]) {
      currentHalf2++;
    }
  }
  return true;
}
