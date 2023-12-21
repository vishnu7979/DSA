class HeapNode {
  constructor() {
    this.heap = new Array();
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (true) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      if (!this.heap[parentIndex]) break;
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
    return this;
  }

  extract() {
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

    let largest = this.heap.pop();
    let cuurentIndex = 0;
    while (true) {
      let swapto = cuurentIndex;
      let leftChild =   cuurentIndex * 2+ 1;
      let rightChild =   cuurentIndex * 2 + 2;
      if (leftChild < this.heap.length) {
        if (this.heap[leftChild] > this.heap[swapto]) swapto = leftChild;
      }

      if (rightChild < this.heap.length) {
        if (this.heap[rightChild] > this.heap[swapto]) swapto = rightChild;
      }

      if (cuurentIndex === swapto) break;

      [this.heap[swapto], this.heap[cuurentIndex]] = [
        this.heap[cuurentIndex],
        this.heap[swapto],
      ];

      cuurentIndex = swapto;
    }
    return largest;
  }
}

function HeapSorted(a) {
  const heapez = new HeapNode();
  for (let i = 0; i < a.length; i++) {
    heapez.insert(a[i]);
  }

  let result = [];
  while (heapez.heap.length) {
    result.push(heapez.extract());
  }

  return result;
}

let a = [3, 2, 1, 5, 6, 2, 5];
console.log(HeapSorted(a));
