class hashtable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }

    set(key,value){
        const index=this.hash(key);
        const bucket=this.table[index];
        if (!bucket) {
            this.table[index]=[[key,value]]
        }else{
            const Samekey=bucket.find(item=>item[0]===key);
            if(Samekey){
                Samekey[1]=value;
            }else{
                bucket.push([key,value])
            }
        }
       
        // this.table[index]=value;
    }


    
    get(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        if (bucket) {
            const Samekey=bucket.find(item=>item[0]===key);
            if(Samekey){
                return Samekey[1];
            }
        }else{
            return null
        }
        // return this.table[index]
    }

    remove(key){
        const index=this.hash(key);
        const bucket=this.table[index];
        if (bucket) {
            const Samekey=bucket.find(item=>item[0]===key);
            if(Samekey){
                bucket.splice(bucket.indexOf(Samekey),1)
            }
        }else{
            return null;
        }
        // this.table[index]=undefined;
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table=new hashtable(50);
table.set('name','ammu');
table.set('age',47);
table.set('amen','isnu');
table.remove('amen');
table.display();

