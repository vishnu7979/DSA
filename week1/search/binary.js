 function binary(a,k){
     let l=0;
     let r=a.length-1;
     
     while(r>=l){
        let m=Math.floor((l+r)/2);
        if(a[m]===k){
            return m;
        }else if(a[m]>k){
            r=m-1;
        }else if(a[m]<k){
            l=m+1;
        }else{
            console.log("404!!!");
            return -1
        }
     }
     return -1
 }

 
 let result=binary([1,2,3,4,5,6,7,8,9],9)

 console.log(result);