function seclargest(a){
    let sl=-Infinity;
    let l=-Infinity;
    n=a.length;
    for(let i=0;i<n-1;i++){
        if(a[i]>l){
            sl=l;
            l=a[i]
        }else if(sl<a[i]&&a[i]<l){
            sl=a[i];
        }
    }
    return sl
}

let a=[2,4,465,78,56,5,4,43,3,45,7,37,32,4,3];
console.log(seclargest(a));