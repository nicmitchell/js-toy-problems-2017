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
  let result = {};

  const getXvalues = (rect1, rect2) => {
    const lower = (rect1.leftX < rect2.leftX) ? rect1 : rect2;
    const higher = (rect1.leftX < rect2.leftX) ? rect2 : rect1;
    const diff = Math.min(lower.leftX + lower.width, higher.leftX + higher.width) - higher.leftX;
    return {
      leftX: higher.leftX,
      width: diff
    };
  }

  const getYvalues = (rect1, rect2) => {
    const lower = (rect1.bottomY < rect2.bottomY) ? rect1 : rect2;
    const higher = (rect1.bottomY < rect2.bottomY) ? rect2 : rect1;
    const diff = Math.min(lower.bottomY + lower.height, higher.bottomY + higher.height) - higher.bottomY;
    return {
      bottomY: higher.bottomY,
      height: diff
    };
  }

  const xValues = getXvalues(rect1, rect2);
  const yValues = getYvalues(rect1, rect2);

  if (xValues.width > 0 && yValues.height > 0) {
    result = Object.assign({}, xValues, yValues);
  } else {
    result = false;
  }

  return result;
};
