// function sort (arr){
//     const n=arr.length;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp=arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr
// }

// let arr=[2,4,2,56,8,32,1,23,3,5,7,8];
// let result=sort(arr);
// console.log(result);




function sort(arr){
    return arr.sort((a,b)=>b-a)
}
let arr=[2,4,2,56,8,32,1,23,3,5,7,8];
let result=sort(arr);
console.log(result);














