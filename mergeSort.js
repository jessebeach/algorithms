var colors = require('colors/safe');

var start = Date.now();

function msort (arr) {
  var midpoint = Math.floor(arr.length / 2);
  var left = arr.slice(0, midpoint);
  var right = arr.slice(midpoint);
  if (left.length > 1) {
    left = msort(left);
  }
  if (right.length > 1) {
    right = msort(right);
  }
  console.log(
    colors.cyan('[' + left + ']'),
    colors.yellow('[' + right + ']')
  );
  var out = [];
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
	9,
	4,
	2,
  11,
  1,
  3,
	6
]
console.log('original', arr);
var sorted = msort(arr);
console.log('sorted', sorted);
console.log('time complexity', Math.log2(arr.length));
