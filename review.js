class TreeNode{
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
        return this.root===null;
    }

    insert(value){
        const node =new TreeNode(value)
        if(this.isEmpty()){
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



}

function FIndheight(root){
    if(root===null){
        return 
    }
    const leftHeight=FIndheight(root.left);
    const rightHeight=FIndheight(root.right);

    return Math.max(leftHeight,rightHeight)

}


const trees=new Tree();
console.log(trees.isEmpty());
trees.insert(10);
trees.insert(20);
trees.insert(30);
trees.insert(40);
trees.insert(50);
trees.insert(60);
trees.insert(70);
console.log(trees.isEmpty());

console.log(FIndheight(trees.root));