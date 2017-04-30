"use strict";

var colors = require('colors/safe');

class BinaryHeap {
  constructor(evaluator) {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this._bubble(this.heap.length - 1);
  }
  pop() {
    let result = this.heap[0];
    let end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sink(0);
    }
    return result;
  }
  remove(el) {
    let len = this.heap.length;
    for (let i = 0; i < len; i++) {
      if (this.heap[i] === el) {
        let end = this.heap.pop();
        if (i === (len - 1)) {
          break;
        }
        this.heap[i] = end;
        __log('Remove bubble: ');
        this._bubble(i);
        __log('Remove Sink: ');
        this._sink(i);
        break;
      }
    }
  }
  size() {
    return this.heap.length;
  }
  _bubble(index) {
    let el = this.heap[index];
    __logBubbleStart(this.heap, index);
    while (index > 0) {
      let parentIndex = Math.floor((index + 1) / 2) - 1;
      let parentEl = this.heap[parentIndex];
      if (el >= parentEl) {
        break;
      }
      this.heap[parentIndex] = el;
      this.heap[index] = parentEl;
      __logBubbleWhile(this.heap, index, parentIndex, parentEl);
      index = parentIndex;
    }
  }
  _sink(index) {
    let len = this.heap.length;
    let el = this.heap[index];

    while (true) {
      let rightChildIndex = (index + 1) * 2;
      let leftChildIndex = rightChildIndex - 1;
      let leftChild;
      let swapIndex;
      // First child.
      if (leftChildIndex < len) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < el) {
          swapIndex = leftChildIndex;
        }
      }
      // Second child.
      if (rightChildIndex < len) {
        let rightChild = this.heap[rightChildIndex];
        if (rightChild < ((swapIndex == null) ? el : leftChild)) {
          swapIndex = rightChildIndex;
        }
      }
      // No swap to make.
      if (swapIndex == null) {
        __logSinkNoSwap(this.heap, index, leftChildIndex, rightChildIndex);
        break;
      }
      // Make a swap.
      __logSinkSwap(this.heap, index, leftChildIndex, rightChildIndex, swapIndex);
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = el;
      index = swapIndex;
    }
  }
}

let minHeap = new BinaryHeap(x => x);
let input = [26, 10, 30, 29, 7, 4, 8, 9, 6, 11,
  18, 15, 12, 19, 20, 14, 13, 17, 16, 21, 22, 23, 24,
    25, 2, 27, 28, 5, 3, 31, 32, 1];
console.log('**** Push all ****');
input.forEach(x => minHeap.push(x));

console.log('**** Remove 2 ****');
minHeap.remove(2);
console.log('**** Remove 15 ****');
minHeap.remove(15);
console.log('**** Pop all ****');
input.forEach(x => minHeap.pop());

function __log(str) {
  console.log(str);
}

function __logBubbleStart(heap, index) {
  console.log(
    [
      '[',
      heap.map(
        (el, i) => (i === index) ? colors.green(el) : el
      ).join(', '),
      ']'
    ].join('')
  );
}

function __logBubbleWhile(heap, index, parentIndex, parentEl) {
  console.log(
    [
      '[',
      heap.map(
        (el, i) =>
          (i === parentIndex) ? colors.green(el) :
            (i === index) ? colors.yellow.underline(parentEl) : el
      ).join(', '),
      ']'
    ].join('')
  );
}

function __logSinkNoSwap(heap, index, leftChildIndex, rightChildIndex) {
  console.log(
    [
      '[',
      heap.map(
        (el, i) => (i === index) ? colors.green(el) :
         (i === leftChildIndex) ? colors.yellow(el) :
           (i === rightChildIndex) ? colors.red(el) : el
      ).join(', '),
      ']'
    ].join('')
  );
}

function __logSinkSwap(heap, index, leftChildIndex, rightChildIndex, swapIndex) {
  console.log(
    [
      '[',
      heap.map(
        (el, i) => (i === index) ? colors.green(el) :
         (i === leftChildIndex) ? (
           (i === swapIndex) ? colors.yellow.underline(el) : colors.yellow(el)
         ) :
           (i === rightChildIndex) ? (
             (i === swapIndex) ? colors.red.underline(el) : colors.red(el)
           ) : el
      ).join(', '),
      ']'
    ].join('')
  );
}
