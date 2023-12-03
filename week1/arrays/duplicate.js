//includes


// function duplicate(arr){
//     let unique=[];
    
//     for(let i=0;i<arr.length;i++){

//        if(!unique.includes(arr[i])){
//         unique.push(arr[i]);
        
//        }
//     }

//     return unique;
// }

// let arr=[1,2,3,4,5,6,5,43,3,5,7,2]
// console.log(duplicate(arr));


//two loops

function duplicate(arr){
    let unique=[];
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<unique.length;j++){

            if(arr[i]===unique[j]){
                isDuplicate=true;
                break;
            }
        }

        if(!isDuplicate){
            unique.push(arr[i])
        }
    }

return unique;
}

let arr=[1,2,3,2,3,4,1,1,2,4]

let result=duplicate(arr)

console.log(result);