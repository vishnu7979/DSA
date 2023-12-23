class Heap{
    constructor(){
        this.heap=new Array();

    }

    insert(value){
        this.heap.push(value);
        let indexpos=this.heap.length-1;
        while (true) {
            let parentPos=Math.floor((indexpos-1)/2);
            if(!this.heap[parentPos])break;
            if(this.heap[parentPos]>this.heap[indexpos])break;

            [this.heap[parentPos],this.heap[indexpos]]=[this.heap[indexpos],this.heap[parentPos]];
            indexpos=parentPos;


        }
        return this;

    }

    extract(){
       let  lastIndex=this.heap.length-1;
        [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]];
        let largest=this.heap.pop();
        let indexPos=0;
        while (true) {
            let swapto=indexPos;
            let leftChild=indexPos*2 +1;
            let rightChild=indexPos*2 +2;
            if (leftChild<this.heap.length) {
                if(this.heap[leftChild]>this.heap[swapto]){
                    swapto=leftChild;
                }
            }
            if (rightChild<this.heap.length) {
                if(this.heap[rightChild]>this.heap[swapto]){
                    swapto=rightChild;
                }
            }
            
            if(swapto===indexPos){
                break;
            }

            [this.heap[swapto],this.heap[indexPos]]=[this.heap[indexPos],this.heap[swapto]];

            indexPos=swapto;


        }

        return largest
    }

   
}

function maxSortHeap(a){
    const hep=new Heap();
    for(let i=0;i<a.length;i++){
        hep.insert(a[i])
    }

    let result=[];
    while(hep.heap.length){
        result.push(hep.extract());
    }
    return result
}

const a=[3,1,5,8,6,0,-4];
console.log(maxSortHeap(a));