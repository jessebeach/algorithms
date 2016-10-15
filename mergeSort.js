"use strict";

var colors = require('colors/safe');

var start = Date.now();

function msort (arr, level) {
  level = level || 0;
  var midpoint = Math.floor(arr.length / 2);
  var left = arr.slice(0, midpoint);
  var right = arr.slice(midpoint);
  if (left.length > 1) {
    left = msort(left, level + 1);
  }
  if (right.length > 1) {
    right = msort(right, level + 1);
  }
  var out = [];

  console.log(
    colors.white(`LEVEL ${level}\n`),
    colors.green.underline('[' + out + ']'),
    colors.cyan('[' + left + ']'),
    colors.yellow('[' + right + ']')
  );
  for (var i = j = k = 0, il = left.length + right.length; i < il; i++) {
    if (left[j] <= right[k]) {
      out[i] = left[j];
      j++;
    } else if (right[k]) {
      out[i] = right[k]
      k++;
    } else if (left[j]) {
      out[i] = left[j];
      j++;
    }
    console.log(
      colors.green.underline('[' + out + ']'),
      colors.cyan('[' + left.slice(j) + ']'),
      colors.yellow('[' + right.slice(k) + ']')
    );
  }
  return out;
}

var arr = [
  100000,
  5,
	10,
	7,
	8,
	3,
  500,
  1,
]
console.log('original', arr);
var sorted = msort(arr);
console.log('sorted', sorted);
console.log('time complexity', Math.log2(arr.length));
