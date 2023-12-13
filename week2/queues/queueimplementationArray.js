class Queue{

    constructor (){
        this.items=[];
    }


    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
       if(!this.isEmpty()){
        return this.items[0]
       }else{
        return null;
       }
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){

    return this.items.length
    
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue=new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
