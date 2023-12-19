// class MaxHeap {
//   constructor() {
//     this.heap = new Array();
//   }

//   insert(value) {
//     this.heap.push(value);

//     let currentIndex = this.heap.length - 1;

//     while (true) {
//       let parentIndex = Math.floor((currentIndex - 1) / 2);

//       if (!this.heap[parentIndex]) break;
//       if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

//       [this.heap[parentIndex], this.heap[currentIndex]] = [
//         this.heap[currentIndex],
//         this.heap[parentIndex],
//       ];
//       currentIndex = parentIndex;
//     }
//     return this;
//   }

//   extract() {
//     let currentIndex = this.heap.length - 1;

//     [this.heap[0], this.heap[currentIndex]] = [
//       this.heap[currentIndex],
//       this.heap[0],
//     ];

//     let largest = this.heap.pop();
//     let indexPos = 0;

//     while (true) {
//       let swapTo = indexPos;

//       let leftChild = indexPos * 2 + 1;
//       let rightChild = indexPos * 2 + 2;

//       if (leftChild < this.heap.length) {
//         if (this.heap[leftChild] > this.heap[swapTo]) {
//           swapTo = leftChild;
//         }
//       }

//       if (rightChild < this.heap.length) {
//         if (this.heap[rightChild] > this.heap[swapTo]) {

//           swapTo = rightChild;
//         }
//       }

//       if (swapTo === indexPos) break;

//       [this.heap[swapTo], this.heap[indexPos]] = [
//         this.heap[indexPos],
//         this.heap[swapTo],
//       ];

//       indexPos = swapTo;
//     }

//     return largest;
//   }
// }

// function MaxSort(a) {
//   const maxheap = new MaxHeap();
//   for (let i = 0; i < a.length; i++) {
//     maxheap.insert(a[i]);
//   }

//   let result = [];

//   while (maxheap.heap.length) {
//     result.push(maxheap.extract());
//   }

//   return result;
// }

// let array = [4, 6, 3, 8, 43, -9, 64, 23, 65];
// let sorted = MaxSort(array);
// console.log(sorted);

class MaxHeap {
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


  extract(){
    let lastIndex=this.heap.length-1;


    [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]];

    let largest=this.heap.pop();
    let indexPos=0;

    while (true) {
        let swapTo=indexPos;
        let leftChild=indexPos*2 +1;
        let rightChild=indexPos*2 +2;

        if(this.heap.length>leftChild){
            if(this.heap[leftChild]>this.heap[swapTo]){
                [this.heap[leftChild],this.heap[swapTo]]=
                [this.heap[swapTo],this.heap[leftChild]]
            }
        }

        if(this.heap.length>rightChild){
            if(this.heap[rightChild]>this.heap[swapTo]){
                [this.heap[rightChild],this.heap[swapTo]]=
                [this.heap[swapTo],this.heap[rightChild]]
            }
        }

        if(swapTo===indexPos){
            break;
        }

        [this.heap[swapTo],this.heap[indexPos]]=[this.heap[indexPos],this.heap[swapTo]]


    }
    return largest;

  }

}



function HeapSortMax(a) {
    const sheap=new MaxHeap();
    for (let i = 0; i < a.length; i++) {
            sheap.insert(a[i]);
    }

    let result=[]
    while (sheap.heap.length) {
        result.push(sheap.extract())
    }

    return result;
    
}

let a=[5,7,3,12,67,-3,17];
console.log(HeapSortMax(a));


