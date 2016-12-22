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

// Write a function called map2 that accepts two arrays and a function as arguments, and constructs a new array by invoking its function argument on the elements of both arrays, e.g.:
// map2([1, 2, 3], [4, 5, 6], function(a, b) {
//   return a * b;
// });
// => [4, 10, 18]

const map2 = (arr1, arr2, callback) => {
  return map(arr1, (element, i, array) => {
    return (callback(element, arr2[i]))
  });
}
