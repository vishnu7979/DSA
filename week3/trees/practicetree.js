

//isEmpty
//insert
//serach
//preOrder
//inOrder
//postOrder
//levelOrder
//min
// delete
// deleteNode




class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node =new Node(value)
        if(!this.root){
            this.root=node;
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value>node.value){
            if(root.left){
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.left){
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }
    }



}

const tree=new Tree();