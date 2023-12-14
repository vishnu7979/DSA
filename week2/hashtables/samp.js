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

class hashtable {
  constructor(size) {
    this.list = new Array(size);
    this.size = size;
  }

  hash(key) {
    let str = 0;
    for (let i = 0; i < key.length; i++) {
      str += key.charCodeAt(i);
    }
    return str % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.list[index];
    if(!bucket){
        this.list[index]=[[key,value]]
        return ;
    }
    const Same=bucket.find(item=>item[0]===key);
    if(Same){
        Same[1]=value;
    }else{
        bucket.push([key,value]);
    }

  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.list[index];
    if (bucket) {
      const Same = bucket.find((item) => item[0] === key);
      if (Same) {
        return Same[1];
      }
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.list[index];
    if (bucket) {
      const Same = bucket.find((item) => item[0] === key);
      if (Same) {
        bucket.splice(bucket.indexOf(Same), 1);
      }
    }
  }

  print() {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i]) {
        console.log(i, this.list[i]);
      }
    }
  }
}

const list = new hashtable(100);
list.set("name", "ammu");
list.set("age", 47);
list.set("amen", "isnu");
// list.remove('amen');
list.print();
