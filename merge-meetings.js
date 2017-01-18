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

  for (let i = 1; i < meetings.length; i++) {
    let current = meetings[i];
    let lastMeeting = results[results.length - 1];

    if (current.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(lastMeeting.endTime, current.endTime);
    } else {
      results.push(current);
    }
  }

  return results;
}
