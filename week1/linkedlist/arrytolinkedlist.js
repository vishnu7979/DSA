class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
     }


    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node;
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
    }


    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.value,"=>");
            curr=curr.next;
        }
    }

    printback(){
        let stack=[];
        let curr=this.head;
        while(curr){
            stack.push(curr.value)
            curr=curr.next;
        }
        while(stack.length>0){
            console.log("reversed list is :=>",stack.pop());
        }
    }


}


function convert(arr){
    const list=new LinkedList();
    for(const value of arr){
        list.append(value)
    }
 
    return list
}



let arr=[12,32,56,323,7654,87];
let list=convert(arr)
// console.log(convert(arr));
list.print();
list.printback()