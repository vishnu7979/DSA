 function isPlaindrome(str){
    const cleanString=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    n=cleanString.length;

    for(let i=0;i<(n/2)-1;i++){
        if(cleanString[i]!==cleanString[n-1-i]){
            return false;
        }
    }
    
    return true;
 }

 let str='amma'
 console.log(isPlaindrome(str));