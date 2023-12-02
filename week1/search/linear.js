function linear(a,n){
    for(let i=0;i<n;i++){
        if(a[i]==n){
            console.log(`iem found at ${i}`);
            return i
        }
    }
    console.log('item not found');
return-1
}
console.log(linear([3,4,,2,6,4,8,1],4));