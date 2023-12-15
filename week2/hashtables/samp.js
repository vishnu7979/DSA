// class hashtable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;
//     }

//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total%this.size;
//     }

//     set(key,value){
//         const index=this.hash(key);
//         const bucket=this.table[index];
//         if (!bucket) {
//             this.table[index]=[[key,value]]
//         }else{
//             const Samekey=bucket.find(item=>item[0]===key);
//             if(Samekey){
//                 Samekey[1]=value;
//             }else{
//                 bucket.push([key,value])
//             }
//         }

//         // this.table[index]=value;
//     }

//     get(key){
//         const index=this.hash(key);
//         const bucket=this.table[index];
//         if (bucket) {
//             const Samekey=bucket.find(item=>item[0]===key);
//             if(Samekey){
//                 return Samekey[1];
//             }
//         }else{
//             return null
//         }
//         // return this.table[index]
//     }

//     remove(key){
//         const index=this.hash(key);
//         const bucket=this.table[index];
//         if (bucket) {
//             const Samekey=bucket.find(item=>item[0]===key);
//             if(Samekey){
//                 bucket.splice(bucket.indexOf(Samekey),1)
//             }
//         }else{
//             return null;
//         }
//         // this.table[index]=undefined;
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50);
// table.set('name','ammu');
// table.set('age',47);
// table.set('amen','isnu');
// table.remove('amen');
// table.display();




// class hashtable {
//   constructor(size) {
//     this.list = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let str = 0;
//     for (let i = 0; i < key.length; i++) {
//       str += key.charCodeAt(i);
//     }
//     return str % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     const bucket = this.list[index];
//     if(!bucket){
//         this.list[index]=[[key,value]]
//         return ;
//     }
//     const Same=bucket.find(item=>item[0]===key);
//     if(Same){
//         Same[1]=value;
//     }else{
//         bucket.push([key,value]);
//     }

//   }

//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.list[index];
//     if (bucket) {
//       const Same = bucket.find((item) => item[0] === key);
//       if (Same) {
//         return Same[1];
//       }
//     }
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.list[index];
//     if (bucket) {
//       const Same = bucket.find((item) => item[0] === key);
//       if (Same) {
//         bucket.splice(bucket.indexOf(Same), 1);
//       }
//     }
//   }

//   print() {
//     for (let i = 0; i < this.list.length; i++) {
//       if (this.list[i]) {
//         console.log(i, this.list[i]);
//       }
//     }
//   }
// }

// const list = new hashtable(100);
// list.set("name", "ammu");
// list.set("age", 47);
// list.set("amen", "isnu");
// list.remove('amen');
// list.print();


// function bubbleSort(a){
//     let swapped;
//    do{
//     swapped=false;
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]>a[i+1]){
//           let temp=a[i];
//           a[i]=a[i+1];
//           a[i+1]=temp;
//           swapped =true;
//         }
//     }
//    }while(swapped)
// }

// let a=[8,-2,0,5,-4];
// bubbleSort(a);
// console.log(a);




// function insertionSort(a){
//   for(let i=0;i<a.length;i++){
//       let n=a[i];
//       let j=i-1;
//       while(j>=0&&a[j]<n){
//         a[j+1]=a[j];
//         j--;
//       }
//       a[j+1]=n;
//   }
// }

// let a=[8,-2,0,5,-4];
// insertionSort(a);
// console.log(a);



// function quicksort(a){
//   if(a.length<2){
//     return a;
//   }

//   let left=[];
//   let right=[];
//   let pivot=a.length-1;
//   for (let i = 0; i <pivot; i++) {
//     if (a[i]>a[pivot]) {
//       right.push(a[i]);
//     }else{
//       left.push(a[i]);
//     }
    
//   }

//   return [...quicksort(left),a[pivot],...quicksort(right)]
// }


// let a=[8,-2,0,5,-4];

// console.log(quicksort(a));


// function mergeSort(a){
//   if(a.length<2){
//     return a;
//   }
//   let m=Math.floor(a.length/2);
//   let leftArr=a.slice(0,m)
//   let rightArr=a.slice(m);

//   return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(left,right){
//   let sortedArr=[];
//   while(left.length&&right.length){
//     if (left[0]>right[0]) {
//       sortedArr.push(right.shift())
//     }else{
//       sortedArr.push(left.shift())
//     }
//   }

//   return [...sortedArr,...left,...right]
// }


// let a=[8,-2,0,5,-4];
// console.log(mergeSort(a));


// function selectionSort(a){
//     for (let i = 0; i < a.length; i++) {
//       let key=i
//       for (let j = i+1; j < a.length; j++) {
//         if (a[j]>a[key]) {
//             let temp=a[j];
//             a[j]=a[key];
//             a[key]=temp;
//         }
        
//       }
      
//     }
// }

// let a=[8,-2,0,5,-4];
// selectionSort(a)
// console.log(a);

class Table{
  constructor(size){
    this.table=new Array(size)
    this.size=size;
  }

  hash(key){
    let num=0;
    for(let i=0;i<key.length;i++){
        num+=key.charCodeAt(i)
    }
    return num%this.size;
  }

  set(key,value){
    const index=this.hash(key);
    // this.table[index]=value;
    const bucket=this.table[index];
    if(!bucket){
      this.table[index]=[[key,value]];
      return
    }
    const Samekey=bucket.find(item=>item[0]===key)
    if(Samekey){
      Samekey[1]=value;
    }else{
      bucket.push([key,value])
    }

  }

  get(key){
    const index=this.hash(key);
    console.log(index);
    const bucket=this.table[index];
    if(bucket){
      const Samekey=bucket.find(item=>item[0]===key)
      if(Samekey){
        return Samekey[1];
      }else{
        return null;
      }
    
    }

  }

  remove(key){
    const index=this.hash(key);
    // this.table[index]=undefined;
    const bucket=this.table[index];
    if(bucket){
      const Samekey=bucket.find(item=>item[0]===key)
      if(Samekey){
        bucket.slice(bucket.indexOf(Samekey),1)
      }
    
    }
  }

  print(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i]);
      }
    }
  } 
}

const table=new Table(10);
table.print();
table.set('name','vishnu')
table.set('enam','vishnus')
table.print();
 