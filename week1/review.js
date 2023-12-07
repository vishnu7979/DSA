class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size
    }

    apppend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            return null;
        }
        else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }


    print(){
        if(this.isEmpty()){
        
            console.log("List is Empty");
            return null;
        }else{
            let listitems=''
            let curr=this.head;
            while(curr){
                listitems=`${curr.value}`
                curr=curr.next;
            }

            console.log(listitems);
        }
    }

    delete(){
        if(this.isEmpty()){
            return null;
        }else{
            while(pre)
        }
    }
}

const list=new LinkedList()
list.apppend(10);
list.apppend(20);

list.print();
