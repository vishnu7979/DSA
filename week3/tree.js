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
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value>node.value){
            if (root.left===null) {
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }else if(root.value<node.value){
            if (root.right===null) {
                root.right=node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }


    search(root,value){
        if (!root) {
            return false
        }

        if (root.value===value) {
            return true
        }else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }

    
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue=[];
        queue.push(this.root)

        while(queue.length){
            let curr=queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(root.left===null){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value){
        return this.root= this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return root
        }

        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else  if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right);
            root.right=this.deleteNode(root.right,root.value)
        }
        return root;
    }

}

const tree=new BinarySearchTree();
console.log(tree.isEmpty());
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(10);
tree.insert(50);
tree.insert(60);

console.log(tree.isEmpty());
console.log(tree.search(tree.root,20));
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// tree.inOrder(tree.root)
tree.delete(50);
tree.levelOrder();