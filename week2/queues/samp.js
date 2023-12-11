class Queue{

    constructor(){
        this.list=[];
    }

    enqueue(value){
        this.list.push(value)
    }

    dequeue(){
        return this.value.shift();
    }

    peek(){
        return this.list[0]
    }

    size(){
        return this.list.length;
    }

    isEmpty(){
        return this.list.length===0;
    }

}