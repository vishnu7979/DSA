// function remove(arr){
//     let unique=[];
//     for(let i=0;i<=arr.length-1;i++){
//         let  isDuplicate=false;
//         for(let j=0;j<unique.length-1;j++){
//             if(arr[i]===unique[j]){
//                 isDuplicate=true;
//             }
//         }
//         if(!isDuplicate){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }



// let arr=[1,2,22,22,3,4,5,6,6,7,6,7,8,9,19]
// console.log(remove(arr));



//-----------------------------------------------------------
// function fact(n){
//     let facto =1;
// for(let i=1;i<n;i++){
//     facto*=i;
// }
// return facto;
// }

// console.log(fact(5));

//-------------------------------------------------------------

// function fib(n){
//     let a=[0,1];
//     for(let i=2;i<n;i++){
//         a[i]=a[i-1]+a[i-2];
//     }
// return a;
// }

// console.log(fib(8));

//---------------------------------------------------------------


// function midZero(arr){
//     for(let i=0;i<arr.length;i++){
//         let m=Math.ceil(arr.length/2);
//         arr[m]=0;
//     }
//     return arr;
// }


// let arr=[1,2,3,4,5,6,7,8,9,10,11]
// console.log(midZero(arr))

//--------------------------------------------------------------

// function palindrome(arr){
//     let n=arr.length;
//      for(let i=0;i<((n-1)/2);i++){
//         if(arr[i]!==arr[n-1-i]){
//             return false;
//         }
//      }
//      return true;

// }
// let arr=[1,2,3,4,5,6,5,4,3,2,10]
// console.log(palindrome(arr))
//---------------------------------------------------------------


// function poweroftwo(n){
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//     }
//     n=n/2;
//     return true;
// }

// console.log(poweroftwo(128));

//---------------------------------------------------------------


// function IsPrime(n){
//     for(let i=2;i<n/2;i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(IsPrime(7));

//---------------------------------------------------------------


// function rev(arr){
//     let details=[];
//     for (let i=arr.length-1;i>=0;i--){
//         // details+=`${arr[i]} `
//         details.push(arr[i])
//     }
//     console.log(arr);
//     return details
// }

// let arr=[1,2,3,4,5,6,5,4,3,2,10]
// console.log(rev(arr))


//------------------------------------------------------------

// function thirdlaregest(arr){

//     let  l=-Infinity;
//     let sl=-Infinity;
//     let tl=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>l){
//             tl=sl;
//             sl=l;
//             l=arr[i];
//         }else if(arr[i]>sl){
//             tl=sl;
//             sl=arr[i];
//         }else if(arr[i]>tl){
            
//             tl=arr[i];
//         }
         
//     }

// return tl;
// }


// let arr=[1,2,3,4,5,6,5,4,3,2,10]
// console.log(thirdlaregest(arr))

//-------------------------------------------------------


// function sort(arr){
//     let n=arr.length-1;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-i;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp=arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }


// let arr=[1,2,3,4,5,4,3,4,7,8,3,21,2,3456];
// let result= sort(arr);
// console.log(result);
//---------------------------------------------------------


//recursion

// function fact (n){
//     if(n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(10));

//------------------------------------------------------------

// function binaryRecursive(arr,k,l=0,r=arr.length-1){
//   if(l<=r){
//     let m= Math.floor((l+r)/2);
//     if(arr[m]===k){
//         return m;
//     }else if(arr[m]>k){
//         return binaryRecursive(arr,k,l,m+1)
//     }else if(arr[m]<k){
//         return binaryRecursive(arr,k,m+1,r)
//     }
//   }
//   return -1
// }
// let arr=[1,2,3,4,5,6,7,8,9,54]
// let k=7
// console.log(binaryRecursive(arr,k) );

//------------------------------------------------------------

// function fibo(n){
//     if(n<2){
//         return n
//     }
//     return fibo(n-1)+fibo(n-2)
// }
 
// console.log(fibo(10));

//------------------------------------------------------------


// function linear(a,k){
//     for(let i=0;i<a.length;i++){
//         if(a[i]===k){
//             return i;
//         }
//     }
   
//      return -1
     
// }
// let a=[1,2,3,4,5,6,7];
// let k=6
// let result=linear(a,k);

// if(result!==-1){
//     console.log("item found at ",result);
// }else{
//     console.log("not fponf");
// }


//------------------------------------------------------------

// function binary(a,k){
//     let l=0;
//     let r=a.length-1
//     for(let i=0;i<(a.length)/2;i++){
//         let m=Math.floor((l+r)/2);

//         if(a[m]===k){
//             return m;
//         }else if(a[m]>k){
//             r=m-1;
//         }else if(a[m]<k){
//             l=m+1;
//         }
//     }
//     return -1;
// }

// let a=[1,2,3,4,5,6,7,8,9,10];
// let k=11
// let result=binary(a,k);

// if(result!==-1){
//     console.log("item found at ",result);
// }else{
//     console.log("not fponf");
// }


//------------------------------------------------------------


// function fact(n){
//     if(n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }

// console.log(fact(5));




// function fib(n){
//     if(n<2){
//         return n;
//     }
//     return fib(n-1)+fib(n-2)
// }

// console.log(fib(10));


function binaryRecursive(a,k,l=0,r=a.length-1){
    let m=Math.floor((l+r)/2);
    if(l<=r){
        if(a[m]===k){
            return m;
        }else if(a[m]>k){
            return binaryRecursive(a,k,l,m-1)
        }else if(a[m]<k){
            return binaryRecursive(a,k,m+1,r)
        }
    }
    return -1
}

let a=[1,2,3,4,5,6,7,8,9,10];
let k=9
let result=binaryRecursive(a,k);
console.log(result);