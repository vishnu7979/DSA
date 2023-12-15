class Stack{


    constructor(){
        this.list={};
        this.rear=0;
        this.head=0;
    }


    isEmpty(){
        return this.rear-this.head===0;
    }


    size(){
        return this.rear-this.head;
    }


    push(value){
        this.list[this.rear]=value;
        this.rear++;

    }


    pop(){
        const item=this.list[this.head];
        delete this.list[this.head];
        this.head++;
        return item
    }

    print(){
        if(this.isEmpty()){
            console.log("Array is empty");
        }else{
            console.log(this.list);
        }
    }


}

const stack=new Stack();
stack.print()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
stack.print()
