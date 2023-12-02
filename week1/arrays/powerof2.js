// function ispower(n){
//     if(n<1){
//         console.log("Not Power");
//         return false;
//     }
//     while(n>1){
//         if(n%2!==0){
//             console.log("Not Power");
//             return false;
//         }
//     n=n/2;
//     }
//     console.log("yeaaaah it  is powerrrrrr !!!!!");
     
// return true
// }

// console.log(ispower(128))

function ispower(n){
    if(n<1){
        return false;
    }
    
    return (n&(n-1))===0
}

console.log(ispower(127))
