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
    let highestMode = 0;
    let modeTemp = '';
    temps.forEach(function(temp){
      temp = temp.toString();
      modes[temp] = modes[temp] ? modes[temp] + 1 : 1;
      highestMode = Math.max(modes[temp], highestMode);
      if (modes[temp] === highestMode) {
        modeTemp = temp;
      }
    })
    return modeTemp;
  }
}

const TempTrackerConstant = function() {
  let max = null;
  let min = null;
  let count = 0;
  let sum = 0;
  let temps = [];
  let mode = null;
  let highestModeCount = 0;

  // array for temp values up to 110
  for (let i = 0; i < 111; i++) {
    temps[i] = 0;
  }

  this.insert = function(temp) {
    // max
    if (max === null || temp > max) {
      max = temp;
    }

    // min
    if (min === null || temp < min) {
      min = temp;
    }

    // mean
    count++;
    sum = sum + temp;

    // mode
    temps[temp]++;
    if (temps[temp] > highestModeCount) {
      highestModeCount = temps[temp];
      mode = temp;
    }
  }
  this.getMax = function() {
    return max;
  }
  this.getMin = function() {
    return min;
  }
  this.getMean = function() {
    return Math.round(sum / count);
  }
  this.getMode = function() {
    return mode;
  }
}

const tempTracker = new TempTrackerConstant();

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