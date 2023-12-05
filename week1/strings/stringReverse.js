//  function reversedstring(str){
//     return str.split('').reverse().join('');
//  }


// let string="MalayalaM";
// console.log(reversedstring(string));


function reversedstring(str){
    let reversedstrings='';

    for(let i=str.length-1;i>=0;i--){
        reversedstrings+=str[i];
    }

    return reversedstrings
}



let string="amma";
console.log(reversedstring(string));

