/*
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this :

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.
*/

/*
2 rects inputs
1 output rect
*/

const rect1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4
}

const rect2 = {
  leftX: 3,
  bottomY: 7,
  width: 5,
  height: 4
}

const findIntersection = (rect1, rect2) => {
  const getOverlap = (start1, length1, start2, length2) => {
    const highestStart = Math.max(start1, start2);
    const lowestEnd = Math.min(start1 + length1, start2 + length2);
    const overlapLength = lowestEnd - highestStart;

    return {
      start: (lowestEnd >= highestStart) ? highestStart : null,
      length: (lowestEnd >= highestStart) ? overlapLength : null
    };
  }

  const xValues = getOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yValues = getOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  return {
    leftX: xValues.start,
    width: xValues.length,
    bottomY: yValues.start,
    heigh: yValues.length
  };
};
