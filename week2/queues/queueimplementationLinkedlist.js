

class Node{
    constructor(value){
      this.value=value;
      this.next=null;
    }
  }
 
 
 
 
  class Queue{
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
 
    enqueue(value){
      const node=new Node(value);
      if(this.isEmpty()){
        this.head=node;
      }else{
        let curr=this.head;
        while(curr.next){
          curr=curr.next
        }
        curr.next=node;
      }
      this.size++;
    }
 
 
    prepend(value){
      const node=new Node(value)
      if(this.isEmpty()){
        this.head=node;
      }else{
        node.next=this.head;
        this.head=node;
      }
      this.size++;
    }
 
 
 
    dequeue(){
      if(this.isEmpty()){
        return null
      }
      let removednode=this.head;
      this.head=removednode.next;
      this.size--;
      return removednode;
    }
 
 
 
    print(){
      if(this.isEmpty()){
        console.log("array is empty");
        return null;
      }
      let curr=this.head;
      let str='';
      while(curr){
        str+=`${curr.value} `
        curr=curr.next
      }
      console.log(str)
    }
 
    peek(){
        if(this.isEmpty()){
          return null
        }else{
          let curr=this.head;
          return curr.value;;
        };
    }
 
 
  }
 
  const queue=new Queue();
  console.log(queue.isEmpty());
  console.log(queue.getSize());
 
queue.enqueue(20);
queue.enqueue(230);
queue.enqueue(290);
queue.dequeue();
queue.print();
console.log(queue.getSize());
console.log(queue.peek());
 
 
 
 