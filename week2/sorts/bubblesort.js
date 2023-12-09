function bubbleSort(arr){
    let isSwapped;
    do{
        isSwapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                isSwapped=true;
            }
        }
    }while(isSwapped)
}

let arr=[8,1,2,3,4,-5,6,7,0]
bubbleSort(arr)
console.log(arr);

