
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
list.remove('amen');
list.print();
