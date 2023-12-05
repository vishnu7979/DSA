function palindrome(arr){
    let revarray=[];
    for(let i=arr.length-1;i>=0;i--){
        revarray.push(arr[i])
    }
    console.log(revarray);
     for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==revarray[i]){
           return false
        }
     }
     return true
}

let arr=[1,4,1]
console.log(palindrome(arr));