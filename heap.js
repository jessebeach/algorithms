"use strict";

var colors = require('colors/safe');

class BinaryMinHeap {
  constructor(evaluator) {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this._bubble(this.heap.length - 1);
  }
  pop() {

  }
  remove() {}
  size() {
    return this.heap.length;
  }
  _bubble(index) {
    let el = this.heap[index];
    console.log(
      [
        '[',
        this.heap.map(
          (el, i) => (i === index) ? colors.cyan(el) : el
        ).join(', '),
        ']'
      ].join('')
    );
    while (index > 0) {
      let parentIndex = Math.floor((index + 1) / 2) - 1;
      let parentEl = this.heap[parentIndex];
      if (el >= parentEl) {
        break;
      }
      this.heap[parentIndex] = el;
      this.heap[index] = parentEl;
      console.log(
        [
          '[',
          this.heap.map(
            (el, i) =>
              (i === parentIndex) ? colors.green.underline(el) :
                (i === index) ? colors.yellow(parentEl) : el
          ).join(', '),
          ']'
        ].join('')
      );
      index = parentIndex;
    }
  }
  _sink() {}
}

let minHeap = new BinaryMinHeap(x => x);
[2, 10, 3, 5, 7, 4, 8, 9, 6, 11,
  18, 15, 12, 19, 20, 14, 13, 17, 16, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 1].forEach(x => minHeap.push(x));
