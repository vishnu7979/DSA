

class Node{
    constructor(value){
      this.value=value;
      this.next=null;
    }
  }
 
 

 
  class Stack{
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
 
    append(value){
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
 
 
    push(value){
      const node=new Node(value)
      if(this.isEmpty()){
        this.head=node;
      }else{
        node.next=this.head;
        this.head=node;
      }
      this.size++;
    }
 
 
 
    pop(){
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
 
  const stack=new Stack();
  console.log(stack.isEmpty());
  console.log(stack.getSize());
 
stack.push(20);
stack.push(230);
stack.push(290);
stack.pop();

stack.print(); 
 
 
 
 