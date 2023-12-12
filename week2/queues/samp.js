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


class CircularQueue{
    constructor(capacity){
        this.items=new Array(capacity);
        this.capacity=capacity;
        this.length=0;
        this.rear=-1;
        this.front=-1;
    }

    isFull(){
        return this.length===this.capacity;
    }

    enqueue(value){
        if(this.isFull()){
            console.log('queue is full');
            return null
        }else{
            
            this.rear=(this.rear+1)%this.capacity;
            this.items[this.rear]=value;
            this.length++;
            if(this.front===-1){
                this.front=this.rear;
            }
        }
    }

}