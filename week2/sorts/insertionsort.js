function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let key=arr[i];
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
}

let RR=[8,20,-2,-6,4];
console.log("unsorted array is ",RR);
insertionSort(RR);
console.log("sorted array is ",RR);
