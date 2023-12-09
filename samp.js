// function mergeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     const mid=Math.floor(arr.length/2);
//     const left=arr.slice(0,mid);
//     const right=arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){

//     let sorted=[];
//     while(left.length&&right.length){
//         if(left[0]>right[0]){
//             sorted.push(right.shift());
//          }else{
//             sorted.push(left.shift());
//          }
//     }

//      return [...sorted,...left,...right]

// }


// let a=[9,1,34,-8,43];
// console.log(mergeSort(a));



//insertion sort

// function insertionsort(a){
//     for(let i=1;i<a.length-1;i++){
//         let n=a[i];
//         let j=i-1;

//         while(j>=0&&a[j]>n){
//             a[j+1]=a[j];
//             j--;
//         }
//         a[j+1]=n;
//     }
// }

// let a=[9,1,34,-8,43];
// insertionsort(a);
// console.log(a);

//quick sort;

// function quickSort(a){
    
// if(a.length<2){
//     return a
// }
    
//     let pivot=a.length-1;
//     let left=[];
//     let right=[];

//     for(let i=0;i<pivot;i++){
       
//             if(a[i]<a[pivot]){
//                 left.push(a[i]);
//             }else{
//                 right.push(a[i]);
//             }
   
//     }

//     return [...quickSort(left),a[pivot],...quickSort(right)]
// }

// let a=[9,1,34,-8,43];
// console.log(quickSort(a));



//merge sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     };
//     let mid=Math.floor(arr.length/2);
//     let leftArr=arr.slice(0,mid);
//     let rightArr=arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr));

// }

// function merge(leftArr,rightArr){
//     let sortedArr=[];
//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]>rightArr[0]){
//             sortedArr.push(rightArr.shift())
//         }else{
//             sortedArr.push(leftArr.shift())
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr]
// }


// let a=[9,1,34,-8,43];
// console.log(mergeSort(a));


//selection sort

function selectionSort(a){
    for(let i=0;i<a.length-1;i++){
        let m=i;
        for(let j=i+1;j<a.length-1;j++){
            if(a[m]>a[j]){
                let temp=a[j];
                a[j]=a[m];
                a[m]=temp;
            }
        }

 
    }
}

let a=[3,2,5,1,8,-76,56];
selectionSort(a);
console.log(a);


