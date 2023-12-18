

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
            if(!root.left){
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
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
            if(value===root.value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else if(value>root.value){
                return this.search(root.right,value)
            }else{
                return false;
            }
        }
    }

    preOrder(root){
       if (!root) {
            return null
       }else{
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
       }

    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }


}

const tree=new Tree();
console.log(tree.isEmpty());
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
console.log(tree.isEmpty());
console.log(tree.search(tree.root,10));
console.log('preOrder');
tree.preOrder(tree.root)
console.log('postOrder');
tree.postOrder(tree.root);
console.log('inOrder');
tree.inOrder(tree.root);



