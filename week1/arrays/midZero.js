function midzero(arr){
    let mid=((arr.length-1)/2)
    arr[mid]=0;

    return arr
}

let arr=[1,2,3,4,5,6,7];
console.log(midzero(arr));