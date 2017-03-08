/**

You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

const TempTracker = function() {
  const temps = [];
  this.insert = function(temp) {
    temps.push(temp);
  }
  this.getMax = function() {
    let max = temps[0];
    temps.forEach(function(temp){
      max = Math.max(temp, max);
    });
    return max;
  }
  this.getMin = function() {
    let min = temps[0];
    temps.forEach(function(temp){
      min = Math.min(temp, min);
    });
    return min;
  }
  this.getMean = function() {
    const sum = temps.reduce(function(running, current) {
      return running + current;
    });
    return Math.floor(sum / temps.length);
  }
  this.getMode = function() {
    const modes = {};
    let highest = new Number();
    temps.forEach(function(temp){
      temp = temp.toString();
      modes[temp] = modes[temp] ? modes[temp]++ : 1;
      highest = Math.max(modes[temp], highest);
    })
    return highest;
  }
}

const tempTracker = new TempTracker();

tempTracker.insert(50);
tempTracker.insert(89);
tempTracker.insert(45);
tempTracker.insert(45);
tempTracker.insert(55);
tempTracker.insert(75);
tempTracker.insert(59);

console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());