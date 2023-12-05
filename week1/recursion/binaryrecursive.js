function rbs(a,k,l=0,r=a.length-1){

    if(l<=r){
        let m=Math.floor((l+r)/2)

        if(a[m]===k){
            return m
        }else if(a[m]>k){
            return rbs(a,k,l,m-1)
        }else if(a[m]<k){
            return rbs(a,k,m+1,r)
        }
    }
return -1;
}



const a =[1,2,3,4,5,6,7,8,9,19];
const k = 191;
let result=rbs(a,k)

if(result===-1){
    console.log("item  not found in the given array");
}else{
    console.log(`item found at index ${result}`);
}

