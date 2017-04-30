"use strict";

var colors = require('colors/safe');

function quickSort (arr) {
  const bucketLess = [];
  const bucketMore = [];
  const len = arr.length - 1;
  const r = arr[len];

  for (let i = 0; i < len; i ++) {
    if (arr[i] <= r) {
      bucketLess.push(arr[i]);
    } else {
      bucketMore.push(arr[i]);
    }
  }
  console.log(
    colors.cyan.underline('[' + bucketLess + ']'),
    colors.green(r),
    colors.yellow.underline('[' + bucketMore + ']')
  );

  const leftValues = (bucketLess.length > 0) ? quickSort(bucketLess) : [];
  const rightValues = (bucketMore.length > 0) ? quickSort(bucketMore) : [];

  return [].concat(leftValues, r, rightValues);
}

var arr = [
  5,
  10,
  7,
  4,
  8,
  3,
  9,
  4,
  4,
  4,
  2,
  11,
  1,
  6,
  4
]
console.log(arr);
var sorted = quickSort(arr);
console.log(sorted)
