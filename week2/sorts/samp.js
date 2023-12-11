//bubble sort

// function bubbleSort(a){
//     let isSwapped;
//   do{
//     isSwapped=false;
//     for(let j=0;j<a.length-1;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             isSwapped=true;
//         }
//     }
//   }while(isSwapped)
    
// }

// let a=[-2,4,-6,8,20];
// bubbleSort(a);
// console.log(a);





//insertion sort

// function insertionSort(a){
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


// let a=[-2,4,-6,8,20];
// insertionSort(a);
// console.log(a);


// quick sort

// function quickSort(a){

//     if(a.length<2){
//         return a
//     }

//     let m=a.length-1;
//         let left=[];
//         let right=[];
//     for(let i=0;i<m;i++){
//         if(a[i]<a[m]){
//             left.push(a[i]);
//         }else{
//             right.push(a[i]);
//         }
//     }

//     return [...quickSort(left),a[m],...quickSort(right)]
// }

// let a=[-2,4,-6,8,20];
// console.log(quickSort(a));


//merge sort

// function mergeSort(a){
//     if(a.length<2){
//     return a
//     }
//     let m=Math.floor(a.length/2);
//     let leftArr=a.slice(0,m);
//     let rightArr=a.slice(m);
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(left,right){
//     let sortedArr=[];
//     while(left.length&&right.length){
//         if(left[0]>right[0]){
//             sortedArr.push(right.shift())
//         }else{
//             sortedArr.push(left.shift())
//         }
//     }

//     return [...sortedArr,...left,...right]
// }


// let a=[-2,4,-6,8,20];
// console.log(mergeSort(a));

// selection sort

// function selectionSort(a){
     
    
//     for(let i=0;i<a.length-1;i++){
//         let m = i;
      
//         for(j=i+1;j<a.length-1;j++){
//             if(a[j]<a[m]) {
//                 let temp=a[m];
//                     a[m]=a[j];
//                     a[j]=temp;
//                    }
//         }

//     }
// }

// let a=[-2,4,-6,8,20];
// selectionSort(a)
// console.log(a);


//bubblesort

// function bubble(arr){
//     let swapped;
//   do{
//     swapped=false;
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i+1];
//             arr[i+1]=arr[i];
//             arr[i]=temp;
//             swapped=true;
//         }
//     }
//   }while(swapped)
// }

// let arr=[-2,8,24,-28,0,87]
// bubble(arr);
// console.log(arr);


// insertionsort

// function insertionSort(a){
//     for(let i=1;i<a.length-1;i++){
//         let key=a[i];
//         j=i-1;

//         while(j>=0&&a[j]>key){
//             a[j+1]=a[j]
//             j--;
//         }
//         a[j+1]=key;
//     }
// }


// let arr=[-2,8,24,-28,0,87]
// insertionSort(arr);
// console.log(arr);

//quicksort

// function quickSort(a){
//     if(a.length<2){
//         return a;
//     }
//     let pivot=a.length-1;
//     let left=[];
//     let right=[];

//     for(let i=0; i<a.length-1; i++){
//         if(a[i]<a[pivot]){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }

//     return [...quickSort(left),a[pivot],...quickSort(right)]
// }

// let arr=[-2,8,24,-28,0,87]
// console.log(quickSort(arr));

//mergesort

// function mergeSort(a){
//     if(a.length<2){
//         return a;
//     }
//     let mid=Math.floor(a.length/2);
//     let leftArr=a.slice(0,mid)
//     let rightArr=a.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(a,b){
//     let sortedArr=[];
//     while(a.length&&b.length){
//         if(a[0]<b[0]){
//             sortedArr.push(a.shift())
//         }else{
//             sortedArr.push(b.shift())
//         }
//     }

//     return [...sortedArr,...a,...b]
// }


// let arr=[-2,8,24,-28,0,87]
// console.log(mergeSort(arr));


function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let key=i;
        for(let j=i+1;j<arr.length-1;j++){
            if(arr[j]<arr[key]){
                let temp=arr[j];
                arr[j]=arr[key];
                arr[key]=temp;
            };
        }
    }

    return arr;
}

let arr=[-2,8,24,-28,0,87]
console.log(selectionSort(arr));

