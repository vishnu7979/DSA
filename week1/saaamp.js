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
        return this.size;
    }


    prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;

        }
        this.size++;
    }


    append(value){
        const node =new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;

        }
        list.size++;
    }


    insert(value,index){
        if(index>this.size||index<0){
                return false;
        }
        
        if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let curr=this.head;
            for(let i=0;i<index-1;i++) {
                curr=curr.next;
             };
             node.next=curr.next;
             curr.next=node;
             this.size++;

        }
    }


    

    remove(index){
        if(index>this.size||index<0){
            return false;
    }
    let removedNode;
    if(index===0){
        removedNode=this.head;
        this.head=removedNode.next;
    }else{
        let curr=this.head;
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
        removedNode=curr.next;
        curr.next=removedNode.next;
    }
        this.size--;
    }


    removevalue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            size--;
            return
        }else{
            let curr=this.head;
            while(curr.next&&curr.next.value!==value){
                curr=curr.next
            }
           if(curr.next){
            curr.next=curr.next.next;
            this.size--;
           }
        }
    }


    search(value){
        if(this.isEmpty()){
            return null;
        }
       let i=0;
       let curr=this.head;
       while(curr){
        if(curr.value===value){
            return i;
        }
        curr=curr.next;
        i++;
       }
       return null;
}


    reverse(){
        let prev=null;
        let curr=this.head;
        while(curr){
        let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }

    print(){
        if(this.isEmpty()){
            console.log("empty list!!!")
        }else{
            let curr=this.head;
            let listValues='';
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next;
            }
            console.log(listValues);

        }
    }


}

const list=new LinkedList()
console.log("list is empty ?",list.isEmpty());
console.log("size of list is ",list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
console.log("list is empty ?",list.isEmpty());
console.log("size of list is ",list.getSize());
list.append(50);
// list.removevalue(10)
console.log(list.search(50));
list.print();
list.reverse();
list.print();