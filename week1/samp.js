//fibonacci Normal

// function fibonacci(n){
//     let result=[0,1];
//     for(let i=2;i<n;i++){
//         result[i]=result[i-1]+result[i-2];
//     }
//     return result;
// }
// n=5
// let output=fibonacci(n)
// console.log(output);

// big O= O(n)

//-----------------------------------------------------------------------------------------------------------------------------

//factorial Normal

// function factorial(n){
//     let result=1;
//     for(let i=1;i<n;i++){
//         result *= i;
//     }
//     return result;
// }
// n=6
// let output=factorial(n)
// console.log(output);

//big O = O(n)

//-----------------------------------------------------------------------------------------------------------------------------

//power of two

// function isPower(n){
//     for(i=0;i<n;i++){
//         if(n%2===0){
//             n=n/2
//         }else{
//         return false
//         }
//     }
//     return true;
// }

// n=64
// let result = isPower(n);
// console.log(result);


//big O = O(logn)


//using bitwise

// function isPowerbitwise(n){
//     if(n<1){
//         return false
//     }
//     return (n&(n-1))===0    
// }

// n=644
// let result = isPowerbitwise(n);
// console.log(result);


//-----------------------------------------------------------------------------------------------------------------------------


//prime

// function isprime(n){
//     for(let i=2;i<n/2;i++){
//         if ( n % i == 0 ) {
//             return false
//         }

//     }
//     return true;
// }
// let n=8
// let result=isprime(n)
// console.log(result);

// big O=O(logn)

//-----------------------------------------------------------------------------------------------------------------------------


//recursive fibonacci

// function refib(n){
//     if(n<2){
//         return n
//     }
//     return refib(n-1)+refib(n-2)
// }

// let n=6
// let result=refib(n)
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------

//recursive factorial 

// function factorial(n){
//     if(n===0){
//     return 1
//     }
//     return factorial(n-1)*n
// }

// let n=0
// let result=factorial(n)
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------


class Node{
    constructor(value){
         this.value=value;
         this.next=null;
      }
    }
    
    
    
    
    class LinkedList{
      constructor(){
      this.head=null;
      this.size=0;
    }
    
    isEmpty(){
      return this.size===0
    }
    
    getSize(){
      return this.size;
    }
    
    

    prepend(value){
      const node= new Node(value);
    
    if(this.isEmpty()){
    this.head=node
    }else{
    node.next=this.head
    this.head=node
    }
    this.size++
    }

    append(value){
        const node =new Node(value);

        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }

    insert(value,index){

        if(index<0||index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node= new Node(value);
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node;
            this.size++
        }
    }

    remove(index){
        if(index<0||index>this.size){
            return null;
        }

        if(index==0){
            let removednode=this.head;
            this.head=removednode.next;
        }else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            let removednode=prev.next;
            prev.next=removednode.next
        }
        this.size--;
        
    }


    removebyvalue(value){
        if(this.isEmpty()){
            return null;
        }

        if(this.head.value===value){
            let removednode=this.head;
            this.head=removednode.next;
            this.size--;
            return value;
        }else{
            let prev=this.head;
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            let removednode=prev.next;
            prev.next=removednode.next
            this.size--;
            return value;
        }
        return null;
    }



    search(value){
    if(this.isEmpty()){
        return null;
    }else{
        let i=0;
        let curr=this.head;
        while(curr){
            if(curr.value===value){
                return i;
            }
            curr=curr.next;
            i++;
        }
    }
}


reverse(){
    let prev=null;
    let curr=this.head;
    while(curr){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    this.head=prev;
}

    print()
    {
        if(this.isEmpty()){
            console.log("size is empty !!!");
        }else{
            let curr=this.head;
            let listvalues='';
            while(curr!=null){
                listvalues += `${curr.value},`;
                curr=curr.next;
            }
            console.log( listvalues);
        }
    }
    }
    
    const list= new LinkedList();
    
    console.log(list.getSize())
    console.log(list.isEmpty())
    list.print();

    list.insert(10,0)
    list.print();

    list.insert(20,0)
    list.print();
 
    list.insert(40,2)
    list.print();

    list.insert(50,2)
    list.print();
 
    
    list.reverse();
    list.print();

    
    console.log(list.getSize());
    console.log(list.isEmpty());

   

    