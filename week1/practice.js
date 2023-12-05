// class Node{

//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }



//     isEmpty(){
//         return this.size===0;
//     }

//     getSize(){
//         return this.size;
//     }


//     prepend(value){
//         const node =new Node(value)
//         if(this.isEmpty()){
//             this.head=node;
//         }else{
//             node.next=this.head;
//             this.head=node;

//         }
//         this.size++;
//     }


//     append(value){
//         const node =new Node(value);
//         if(this.isEmpty()){
//             this.head=node;
//         }else{
//             let curr=this.head;
//             while(curr.next){
//                 curr=curr.next;
//             }
//             curr.next=node;

//         }
//         list.size++;
//     }


//     insert(value,index){
//         if(index>this.size||index<0){
//                 return false;
//         }
        
//         if(index===0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let curr=this.head;
//             for(let i=0;i<index-1;i++) {
//                 curr=curr.next;
//              };
//              node.next=curr.next;
//              curr.next=node;
//              this.size++;

//         }
//     }


//     remove(index){
//         if(index>this.size||index<0){
//             return false;
//     }
//     let removedNode;
//     if(index===0){
//         removedNode=this.head;
//         this.head=removedNode.next;
//     }else{
//         let curr=this.head;
//         for(let i=0;i<index-1;i++){
//             curr=curr.next;
//         }
//         removedNode=curr.next;
//         curr.next=removedNode.next;

//     }
//         this.size--;
//     }


//     removevalue(value){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.head.value===value){
//             this.head=this.head.next;
//             size--;
//             return
//         }else{
//             let curr=this.head;
//             while(curr.next&&curr.next.value!==value){
//                 curr=curr.next
//             }
//            if(curr.next){
//             curr.next=curr.next.next;
//             this.size--;
//            }
//         }
//     }


//     search(value){
//         if(this.isEmpty()){
//             return null;
//         }
//        let i=0;
//        let curr=this.head;
//        while(curr){
//         if(curr.value===value){
//             return i;
//         }
//         curr=curr.next;
//         i++;
//        }
//        return null;
// }


//     reverse(){
//         let prev=null;
//         let curr=this.head;
//         while(curr){
//         let next=curr.next;
//             curr.next=prev;
//             prev=curr;
//             curr=next;
//         }
//         this.head=prev;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("empty list!!!")
//         }else{
//             let curr=this.head;
//             let listValues='';
//             while(curr){
//                 listValues+=`${curr.value} `
//                 curr=curr.next;
//             }
//             console.log(listValues);

//         }
//     }


// }

// const list=new LinkedList()
// console.log("list is empty ?",list.isEmpty());
// console.log("size of list is ",list.getSize());
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// console.log("list is empty ?",list.isEmpty());
// console.log("size of list is ",list.getSize());
// list.append(50);
// // list.removevalue(10)
// console.log(list.search(30));
// list.print();
// list.reverse();
// list.print();

//=====================================================================================================//


class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Linkedlist{
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
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;

        }
        this.size++;
    }

     prepend(value){
        const node=new Node(value)
         node.next=this.head;
         this.head=node;
         this.size++;
     }

     DeleteByValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return value
        }
        let curr=this.head;
        while (curr.next&&curr.next.value!==value) {
            curr=curr.next;
        }
            if(curr.next){
                curr.next=curr.next.next;
                this.size--;
                return value;
            }
            return -1;
        }

     

    print(){
        let curr=this.head;
        let listValues=''
        while(curr){
            listValues+=`${curr.value}=> `
            curr=curr.next;
        }
        console.log(listValues);
    }
    

    revereseprint(){
        let curr=this.head;
        let stack=[];
        while(curr){
            stack.push(curr.value);
            curr=curr.next;
        }

        let reveValues='';
        while(stack.length>0){
            reveValues+=`${stack.pop()}=> `
        }
        console.log(reveValues);
            
        
    }

    

}

 function convert(arr){
    const list=new Linkedlist()
    for(let i=0;i<arr.length;i++){
        list.append(arr[i])
    }
   
    return list;
 }

let arr=[1,2,3,4,5,6,7,8,9];
let list=convert(arr)
list.DeleteByValue(8)
list.print()
list.revereseprint()

// class DoublyNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     append(value) {
//         const newNode = new DoublyNode(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     prepend(value) {
//         const newNode = new DoublyNode(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     print() {
//         let current = this.head;
//         let listValues = '';
//         while (current) {
//             listValues += `${current.value} `;
//             current = current.next;
//         }
//         console.log(listValues);
//     }

//     printReverse() {
//         let current = this.tail;
//         let listValues = '';
//         while (current) {
//             listValues += `${current.value} `;
//             current = current.prev;
//         }
//         console.log(listValues);
//     }
// }

// // Example usage
// const doublyList = new DoublyLinkedList();
// doublyList.append(50);
// doublyList.prepend(21);

// console.log("Doubly Linked List (Forward):");
// doublyList.print();

// console.log("Doubly Linked List (Reverse):");
// doublyList.printReverse();
