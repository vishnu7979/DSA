// class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     push(element) {
//       this.items.push(element);
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return "Underflow";
//       }
//       return this.items.pop();
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     size() {
//       return this.items.length;
//     }
//   }
  
//   function removeOddNumbers(stack) {
//     // Base case: stack is empty
//     if (stack.isEmpty()) {
//       return;
//     }
  
//     // Pop the top element
//     const element = stack.pop();
  
//     // Recursive call on the remaining elements
//     removeOddNumbers(stack);
  
//     // If the popped element is even, push it back to the stack
//     if (element % 2 === 0) {
//       stack.push(element);
//     }
//   }
  
//   // Example usage:
//   const numberStack = new Stack();
//   numberStack.push(1);
//   numberStack.push(2);
//   numberStack.push(3);
//   numberStack.push(4);
//   numberStack.push(5);
  
//   console.log("Original Stack:", numberStack.items);
  
//   removeOddNumbers(numberStack);
  
//   console.log("Stack after removing odd numbers:", numberStack.items);
  

// function remove(a){
//     let array=[]
//     for(let i=0;i<a.length-1;i++){
//         for(let j=i+1;j<a.length;j++){
//             if(a[i]+a[j]===5){
//                 array.push([a[i],a[j]])
//             }
//         }
//     }

//     return array
// }

// const a = [1, 2, 3, 4, 5, 6];
 

// const pairs = remove(a);
// console.log("Pairs with sum 5 " , ":", pairs);


// class Stack{
//     constructor(){
//         this.list=[];
//     }
//     push(value){
//         this.list.push(value)
//     }

//     pop(){
//         this.list.pop()
//     }

//     peek(){
//         return this.list[0]
//     }

//     isEmpty(){
//         return this.list.length===0
//     }

//     isze(){
//         return this.list.length
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("emptyyyyyyy"); 
//         }else{

//             console.log(this.list);
//         }

//     }
// }

// const stack=new Stack();
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(100)
// stack.push(1000)
// stack.push(10000)
// stack.pop()
// stack.push(10567)


// console.log(stack.isEmpty());
// console.log(stack.isze());
// stack.print();


// class Stack{
//     constructor(){
//         this.list={};
//         this.rear=0;
//         this.front=0;
//     }

//     isEmpty(){
//         return this.rear-this.front===0;
//     }

//     size(){
//         return this.rear-this.front
//     }

//     push(value){
//         this.list[this.rear]=value;
//         this.rear++;
//     };

//     pop(){
//         delete this.list[this.front];
//         this.front++;
//     }

//     print(){
//         console.log(this.list);
//     }
// }

// const stack=new Stack();
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.pop()
// stack.push(50)


// console.log(stack.isEmpty());
// console.log(stack.size());
// stack.print();



// class Node{
//     constructor(value){
//         this.next=null;
//         this.value=value
//     }
// }

// class LinkedStack{

//     constructor(){
//         this.size=0;
//         this.head=null;
//     }

//     gtsize(){
//         return this.size;
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     push(value){
//         const node=new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;
//         }
//         this.size++;
//     }

//     pop(){
//         const node=new Node();
//         if(this.isEmpty()){
//             return null;
//         }else{
//             let removed= this.head
//             this.head-removed.next;
//         }
//         this.size--
//     }

//     print(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             let curr=this.head;
//             let str=''
//             while(curr){
//                 str+=`${curr.value} `
//                 curr=curr.next;
//             }
//             console.log(str);
//         }
//     }
// }

// const stack=new LinkedStack();
//   console.log(stack.isEmpty());
// //   console.log(stack.size());

// stack.push(20);
// stack.push(230);
// stack.push(290);
// stack.pop();
// stack.print(); 
// console.log(stack.gtsize());


class Circular{
    constructor(capacity){
        this.list=new Array(capacity)
        this.capacity=capacity;
        this.rear=-1
        this.front=-1
        this.length=0
    }

    iSFull(){
        return this.capacity===this.length
    }

    isEmpty(){
        return this.length===0
    }

    enqueue(value){
        if(this.iSFull()){
            
        }
    }
}