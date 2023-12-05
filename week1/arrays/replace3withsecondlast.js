function replace(arr){
    if(arr.length>=3){
        let thirdindex=2;
        let secondlastindex=arr.length-2;

        let temp=arr[thirdindex];
        arr[thirdindex]=arr[secondlastindex];
        arr[secondlastindex]=temp;
    }else{
        console.log("array must contain minimum  3 values");
    }
    return arr
}

let n=[1,2,3,4,5,6,7,8,9];
console.log(replace(n));