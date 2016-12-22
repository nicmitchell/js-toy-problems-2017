const map = (array, callback) => {
  let result = [];
  each(array, (item, i, collection) => {
    result.push(callback(item, i, collection));
  });
  return result;
}

const each = (array, callback) => {
 for (let i = 0; i < array.length; i++){
  callback(array[i], i, array);
 }
}

// Write a function called mapN that accepts an arbitrary number of arrays and a n-ary function as arguments, and constructs a new array by combining the elements of all the arrays, e.g.:

// mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], function(a, b, c) {
//   return (a * b) + c;
// });
// => [6, 12, 20]

// mapN([1, 2, 3], function(x) { return x * x; }) // => [1, 4, 9]

const mapN = (...arrays) => {
  const callback = arrays.pop();

  let slicedArray = map(arrays[0], (element, firstArrayIdx, firstArray) => {
    return  map(arrays, (argArrayElement, arrayIdx, argArrays) => {
      return argArrays[arrayIdx][firstArrayIdx];
    })
  });

  return map(slicedArray, (element, i, array) => {
    return callback.apply(null, element);
  })
};