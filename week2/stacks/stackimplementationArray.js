class Stack{
    constructor(){
        this.list=[];
    }
    push(value){
        this.list.push(value)
    }
    pop(value){
        this.list.pop()
    }
    peek(){
         return this.list[0];
    }
    isEmpty(){
        return this.list.length===0;
    }
    size(){
        return this.list.length;
    }

    print(){
        if(this.isEmpty()){
            console.log("array is empty!!!...");
        }else{
            console.log(this.list.toString());
        }
    }
}


const stack=new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
stack.print();
stack.pop();
stack.print();

stack.pop();
stack.print();

console.log(stack.peek());