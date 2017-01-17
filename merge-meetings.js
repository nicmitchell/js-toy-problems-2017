/* Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.


For example, given:
  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ]

your function would return:
  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
  ]

*/

const meetings = [
  {startTime: 0,  endTime: 1},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
];

const mergeRanges = (meetings) => {
  const sorted = meetings.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  const results = [sorted[0]];
  
  const testStartTime = (current, results) => {
    return current.startTime >= results.startTime && current.startTime <= results.endTime;
  }

  const testEndTime = (current, results) => {
    return current.endTime >= results.startTime && current.startTime <= results.endTime;
  }

  for (let i = 1; i < meetings.length; i++) {
    let current = meetings[i];
    let addNewResult = true;

    for (let j = 0; j < results.length; j++) {
      if (testStartTime(current, results[j]) && testEndTime(current, results[j])) {
        results[j].startTime = Math.min(results[j].startTime, current.endTime);
        results[j].endTime = Math.max(results[j].endTime, current.endTime);
        addNewResult = false;
      }
    }
    if (addNewResult) {
      results.push(current);
    }
  }

  return results;
}
