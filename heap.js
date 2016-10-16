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
      this._sink(0, result);
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
        console.log('Bubble: ');
        this._bubble(i);
        console.log('Sink: ');
        this._sink(i, end);
        break;
      }
    }
  }
  size() {
    return this.heap.length;
  }
  _bubble(index) {
    let el = this.heap[index];
    console.log(
      [
        '[',
        this.heap.map(
          (el, i) => (i === index) ? colors.green(el) : el
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
              (i === parentIndex) ? colors.green(el) :
                (i === index) ? colors.yellow.underline(parentEl) : el
          ).join(', '),
          ']'
        ].join('')
      );
      index = parentIndex;
    }
  }
  _sink(index, result) {
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
        console.log(
          [
            '[',
            this.heap.map(
              (el, i) => (i === index) ? colors.green(el) :
               (i === leftChildIndex) ? colors.yellow(el) :
                 (i === rightChildIndex) ? colors.red(el) : el
            ).join(', '),
            ']'
          ].join('')
        );
        break;
      }
      // Make a swap.
      console.log(
        [
          '[',
          this.heap.map(
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
console.log('**** Remove 2 ****');
minHeap.remove(15);
console.log('**** Pop all ****');
input.forEach(x => minHeap.pop());
