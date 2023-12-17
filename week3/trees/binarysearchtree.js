class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
   constructor(){
    this.root=null;
   }

   isEmpty(){
    return this.root===null;
   }


   insert(value){
    const node=new Node(value);
    if(this.isEmpty()){
        this.root=node
    }else{
        this.insertNode(this.root,node)
    }
   }

   insertNode(root,node){
    if(root.value<node.value){
        if(root.left===null){
            root.left=node;
        }else{
            this.insertNode(root.left,node)
        }
    }else{
        if(root.right===null){
            root.right=node;
        }else{
            this.insertNode(root.right,node)
        }
    }
   }

   search(root,value){
    if(!root){
        return false;
    }else{
        if(root.value===value){
            return true;
        }else if(root.value>value){
            return this.search(root.right,value)
        }else if(root.value<value){
            return this.search(root.left,value)
        }else{
            return false;
        }
    }
   }
}

const bst=new BinarySearchTree(10);
console.log('binary search is empty?',bst.isEmpty());
bst.insert(10);
bst.insert(20);
bst.insert(30);

console.log('binary search is empty?',bst.isEmpty());
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,50));
console.log(bst.search(bst.root,30));

