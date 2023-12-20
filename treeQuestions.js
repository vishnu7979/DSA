class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }

    
}

class Tree {
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value);
        if (this.isEmpty()) {
            this.root=node;
        } else {
            this.insertValue(this.root,node)
        }
    }

    insertValue(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left=node;
            }else{
                this.insertValue(root.left,node)
            }
        }else{
            if(!root.right){
                root.right=node;
            }else{
                this.insertValue(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }

        if(root.value===value){
            return true;
        }else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value);
        }
        
    }


    preOrder(root){
        if(root){
            console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right)
        }

    }

    postOrder(root){
if (root) {
    
    this.postOrder(root.left);
    this.postOrder(root.right)
    console.log(root.value);
}
    }

    inOrder(root){
       if (root) {
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
       }
    }

    levelOrder(){
        const queue=[];
        queue.push(this.root);
        while(queue.length){
            const curr=queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if (curr.right) {
            queue.push(curr.right)
            }
        }
    }

    isBST(root){
        if(!root){
            return true;
        }

        if(root.left&&root.left.value>root.value){
            return false;
        }
        if(root.right&&root.right.value<root.value){
            return false;
        }

        return this.isBST(root.left)&&this.isBST(root.right)
    }

    delete(value){
        this.root=this.deletreNode(this.root,value)
    }
    deletreNode(root,value){
        if(root===null){
            return root
        }

        if(root.value>value){
            root.left=this.deletreNode(root.left,value)
        }else if(root.value<value){
            root.right=this.deletreNode(root.right,value)
        }else{
            if (!root.left&&!root.right) {
                return null;
            } 
            
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right);
            root.right=this.deletreNode(root.right,root.value);
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
tree.levelOrder();
console.log(tree.isBST(tree.root));