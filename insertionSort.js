"use strict";

var colors = require('colors/safe');

function isort (arr) {
  for (var j = 1, il = arr.length; j < il; j++) {
    var key = arr[j];
    var i = j - 1;
    while (i > -1 && arr[i] > key) {
      var left = arr.slice(i, i + 1);
      var right = arr.slice(i + 1, i + 2);
      var start = arr.slice(0, i);
      var end = arr.slice(i + 2);
      console.log(
        colors.green('[' + start + ']'),
        colors.cyan.underline('[' + left + ']'),
        colors.yellow.underline('[' + right + ']'),
        colors.green('[' + end + ']')
      );
      arr = start.concat(right, left, end);
      i = i - 1;
    }
  }
  return arr;
}

var arr = [
  5,
  10,
  7,
  8,
  3,
  9,
  4,
  2,
  11,
  1,
  6
]
console.log(arr);
var sorted = isort(arr);
console.log(sorted);
