// class Queue{

//     constructor(){
//         this.list=[];
//     }

//     enqueue(value){
//         this.list.push(value)
//     }

//     dequeue(){
//         return this.list.shift();
//     }

//     peek(){
//         return this.list[0]
//     }

//     size(){
//         return this.list.length;
//     }

//     isEmpty(){
//         return this.list.length===0;
//     }

//     print(){
//         console.log(this.list.toString());
//     }

// }

// const queue=new Queue();
// console.log(queue.isEmpty());
// console.log(queue.size());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.dequeue()

// queue.print()

// console.log(queue.peek());












// class Queue{
//     constructor(){
//         this.list={};
//         this.rear=0;
//         this.front=0;
//     }

//     enqueue(value){
//         this.list[this.rear]=value;
//         this.rear++;
//     }


//     dequeue(){
//         let item=this.list[this.front]
//         delete this.list[this.front];
//         this.front++;
//         return item;
//     }

//     peek(){
//         if(!this.isEmpty()){
//           return  this.list[this.front]
//         }else{
//             return null;
//         }
//     }

   


//     size(){
//         return this.rear-this.front;
//     }

//     isEmpty(){
//         return this.rear-this.front===0
//     }

//     print(){
//         console.log(this.list);
//     }
// }


// const queue=new Queue();
// console.log(queue.isEmpty());
// console.log(queue.size());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.dequeue()

// queue.print()
// console.log(queue.isEmpty());
// console.log(queue.peek());


// class Queue{
//     constructor(capacity){
//         this.items=new Array(capacity);
//         this.capacity=capacity;
//         this.length=0;
//         this.rear=-1;
//         this.front=-1;
//     }

//     isFull(){
//         return this.length===this.capacity;
//     }

//     isEmpty(){
//         return this.length===0;
//     }


//     enqueue(value){
//         this.rear=(this.rear+1)%this.capacity
//         this.items[this.rear]=value;
//         this.length++;
//         if(this.front===-1){
//             this.front=this.rear
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         const item=this.items[this.front];
//         this.items[this.front]=null;
//         this.front=(this.front+1)%this.capacity
//         this.length-=1;
//         if(this.isEmpty()){
//             this.rear=-1;
//             this.front=-1;
//         }
//         return item;
//     }

//     print(){
//         if(this.isEmpty()){
//             return null;
//         }

//         let i;
//         let str='';
//         for(i=this.front;i!=(this.rear);i=(i+1)%this.capacity){
//             str+=this.items[i];
//         }
//         str+=this.items[i];
//         console.log(str);
//     }
// }

// const queue=new Queue(5);
// queue.enqueue(10);
// queue.enqueue(100);
// queue.dequeue()
// console.log(queue.isEmpty());
// console.log(queue.isFull());
// queue.print();



//circularqueue
// class CircularQueue{
//     constructor(capacity){
//         this.items=new Array(capacity);
//         this.capacity=capacity;
//         this.length=0;
//         this.rear=-1;
//         this.front=-1;
//     }

//     isFull(){
//         return this.length===this.capacity;
//     }

//     isEmpty(){
//         return this.length===0;
//     }

//     enqueue(value){
//         if(this.isFull()){
//             console.log('queue is full');
//             return null
//         }else{

//             this.rear=(this.rear+1)%this.capacity;
//             this.items[this.rear]=value;
//             this.length++;
//             if(this.front===-1){
//                 this.front=this.rear;
//             }
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return null;
//         }else{
//             const item=this.items[this.front];
//             this.items[this.front]=null;
//             this.front=(this.front+1)%this.capacity;
//             this.length--;
//             if(this.isEmpty()){
//                 this.rear=-1;
//                 this.front=-1;
//             }
//         }
//     }

//     peek(){
//         return this.items[this.front];
//     }

//     print(){
//         if(this.isEmpty()){
//             return null;
//         }else{
//             let i;
//             let str='';
//             for(i=this.front;i!=this.rear;i=(i+1)%this.capacity){
//                 str+=this.items[i]+"  ";
//             }
//             str+=this.items[i];
//             console.log(str);
//         }
//     }

// }

// const queue=new CircularQueue(5);


// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.dequeue()
// queue.enqueue(60);
// console.log(queue.peek());
// queue.print();

//================================================================================================================================

// class Queue{
//     constructor(){
//         this.list=[];
//     }

//     enqueue(value){
//         this.list.push(value);
//     }

//     dequeue(){
//        return  this.list.shift();
//     }
//     peek(){
//         return this.list[0]
//     }

//     isEmpty(){
//         return this.list.length===0
//     }

//     size(){
//         return this.list.length;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("emptyyyyyyyyyy");
//         }else{
//             console.log(this.list.toString());
//         }
//     }
// }

// const q=new Queue();
// console.log(q.isEmpty());
// q.print();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q.peek());
// q.dequeue()
// q.dequeue()
// console.log(q.peek());
// console.log(q.size());
// q.print();
// console.log(q.isEmpty());


// class Queue{
//     constructor(){
//         this.list={};
//         this.rear=0;
//         this.front=0;
//     }

//     enqueue(value){
//         this.list[this.rear]=value;
//         this.rear++;
//     }

//     dequeue(){
//         const item =this.list[this.front]
//         delete this.list[this.front];
//         this.front++;
//     }

//     size(){
//         return this.rear-this.front;
//     }

//     iSempty(){
//         return this.rear-this.front===0
//     }

//     peek(){
//         return this.list[this.front]
//     }

//     print(){
//       console.log(this.list);  
//     }

    
// }

// const q=new Queue();
// console.log(q.iSempty());
// q.print();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q.peek());
// q.dequeue()
// q.dequeue()
// console.log(q.peek());
// console.log(q.size());
// q.print();
// console.log(q.iSempty());



// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }


// class LinkedListQueue{

//     constructor(value){
//         this.head=null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size;
//     }

//     enqueue(value){
//         const node=new Node(value)
//         if (this.isEmpty()) {
//             this.head=node;
//         }else{
//             let curr=this.head;
//             while(curr.next){
//                 curr=curr.next;
//             }
//             curr.next=node;
//         }
//         this.size++;
//     }

//     dequeue(){
//         const node=new Node();
//         if (this.isEmpty()) {
//             return null
//         }else{

//             let removednode=this.head;
//             this.head=removednode.next;
//             this.size--;
//             return removednode; 
//         }
//     }



//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         let curr=this.head;
//         let str='';
//         while(curr){
//             str+=`${curr.value} `;
//             curr=curr.next
//         }
//         console.log(str);
//     }

//     peek(){
//         return this.head.value
//     }



// }




// const queue=new LinkedListQueue();
// console.log(queue.isEmpty());
// console.log(queue.getSize());

// queue.enqueue(20);
// queue.enqueue(230);
// queue.enqueue(290);
// queue.dequeue();
// queue.print();
// console.log(queue.getSize());
// console.log(queue.peek());





// class CircularQueue{
//     constructor(capacity){
//         this.list=new Array(capacity)
//         this.capacity=capacity;
//         this.length=0;
//         this.rear=-1;
//         this.front=-1;
//     }


//     isEmpty(){
//         return  this.length===0
//     }

//     isFull(){

//         return this.capacity===this.length
//     }

//     peek(){
//         return this.list[this.front]
//     }

//     enqueue(value){
//         this.rear=(this.rear+1)%this.capacity;
//         this.list[this.rear]=value;
//         this.length++;
//         if(this.front===-1){
//             this.front=this.rear;
//         }
//     }
    
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("emptyyyyyyyyyy");
//         }else{
//             this.list[this.front]=null;
//             this.front=(this.front+1)%this.capacity;
//             this.length--;
//             if(this.isEmpty()){
//                 this.rear=-1;
//                 this.front=-1;            }
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("emptyyyyyyyy");
//         }else{
//             let str='';
//             let i;
//             for(i=this.front;i!=(this.rear);i=(i+1)%this.capacity){
//                 str+=this.list[i]+' '
//             }
//             str+=this.list[i];
//             console.log(str);
//         }
//     }

// }



// const cq=new CircularQueue(5);
// cq.print()
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.enqueue(50);
// cq.dequeue();
// cq.enqueue(10);
// console.log(cq.peek());
// cq.print()

class CircularQueue{
    constructor(capacity){
        this.list=new Array(capacity);
        this.capacity=capacity;
        this.length=0
        this.rear=-1;
        this.front=-1;
    }

    isEmpty(){
       return  this.length===0;
    }
    
    isFull(){
        return this.capacity===this.length;
    }

    size(){
        return this.length;
    }

    enqueue(value){
        if(this.isFull()){
            console.log("fulll");
        }else{
            this.rear=(this.rear+1)%this.capacity;
            this.list[this.rear]=value;
            this.length++;
            if(this.front===-1){
                this.front=this.rear;
            }
        }
    }

    dequeue(){

        if(this.isEmpty()){
            console.log("emptyyyyyyyy");
        }
        else{
            this.list[this.front]=null;
            this.front=(this.front+1)%this.capacity;
            this.length--;
            if(this.isEmpty()){
                this.rear=-1;
                this.front=-1;
            }
        }
    }

    print(){
        if (this.isEmpty()) {
            return "empy"
        }
        let i;
        let str='';
        for(i=this.front;i!=this.rear;i=(i+1)%this.capacity){
            str+=this.list[i]+" ";
        }
        str+=this.list[i];
        console.log(str);

    }
    


}

const cq=new CircularQueue(5);
cq.print()
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.dequeue();
cq.enqueue(10);
cq.print()