function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let left=[];
    let right=[];
    let pivot=arr.length-1;
    for(let i=0;i<pivot;i++){
        if(arr[i]<arr[pivot]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
}
return [...quicksort(left),arr[pivot],...quicksort(right)]
}

let arr=[-2,3,7,12,-6,8]
console.log(quicksort(arr));