function selection(a){
    for(let i=0;i<a.length-1;i++){
        let min=i;
        for(let j=i+1;j<a.length-1;j++){
            if(a[min]>a[j]){
                let temp=a[min];
                a[min]=a[j];
                a[j]=temp;
            }
        }
    }
}

let a=[3,4,2,1,9,4,3,-87,43];
selection(a);
console.log(a);