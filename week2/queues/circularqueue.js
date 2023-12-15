class CircularQueue{
    constructor(capacity){
        this.list=new Array(capacity);
        this.capacity=capacity;
        this.length=0;
        this.rear=-1;
        this.front=-1;
    }

    
    isFull(){
        return this.length===this.capacity
    }

    isEmpty(){
        return this.length===0
    }

    enqueue(value){
        if(this.isFull()){
            console.log("fulllllllllllll");
            return null
        }
        this.rear=(this.rear+1)%this.capacity;
        this.list[this.rear]=value;
        this.length++;
        if(this.front===-1){
            this.front=this.rear;
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("emptyyyyyyyyyy");
            return null
        }
        this.list[this.front]=null;
        this.front=(this.front+1) % this.capacity;
        this.length--;
        if(this.isEmpty()){
            this.front=-1;
            this.rear=-1;
        }        
    }


    peek(){
        return this.list[this.front];
    }

    print(){
        if(this.isEmpty()){
            console.log("emptyyyyyyyyyy!!!!!!!");
        }else{
            let i;
            let str='';
            for(i=this.front;i!=this.rear;i=(i+1)%this.capacity){
                str+=this.list[i]+' '
            }
            str+=this.list[i]
            console.log(str);
        }
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
console.log(cq.peek());
cq.print()

