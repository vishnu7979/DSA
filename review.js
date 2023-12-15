function quickSort(a){
    if(a.length<2){
        return a;
    }
    let pivot= a.length-1;
    let left=[];
    let right=[];
    for(let i=0;i<pivot;i++){
        if(a[i]<a[pivot]){
            left.push(a[i])
        }else{
            right.push(a[i])
        }
    }

    return [...quickSort(left),a[pivot],...quickSort(right)]
}

let array=[5,9,4,7,-2,-8];
console.log(quickSort(array));