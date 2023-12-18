class TreeNode{

    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }    
}

function isBST(root){
    if(root===null){
        return true;
    }
    
    if(root.left!==null&&root.value<=root.left.value){
        return false;
    }

    if(root.right!==null && root.value>=root.right.value){
        return false;
    }

    return isBST(root.left) && isBST(root.right)


}

const root=new TreeNode(10);
root.left=new TreeNode(15);
root.right=new TreeNode(30)

console.log(isBST(root));

