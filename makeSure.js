class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

// function isBST(root){
//     if(root===null){
//         return true
//     }

//     if (root.left!==null&&root.left.value>=root.value) {
//         return false         
//     }

//     if (root.right!==null&&root.right.value<=root.value) {
//         return false         
//     }

//     return isBST(root.left)&&isBST(root.right)
// }

// const root=new Node(10);
// root.left=new Node(5);
// root.right=new Node(30);

// console.log(isBST(root));
//-------------------------------------------------------------------------------------------------------------------------
// class Tree{
//     constructor(){
//         this.root=null;
//     }

//     isEmpty(){
//         return this.root===null;
//     }

//     insert(value){

//         const node=new Node(value)
//         if(this.isEmpty())
//         {
//             this.root=node;
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(root.value<node.value){
//             if(root.right==null){
//                 root.right=node;
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }else{
//             if(root.left==null){
//                 root.left=node;
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }
//     }

//     search(root,value){
//         if(this.root===null){
//             return
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(root.value>value){
//                 return this.search(root.left)
//             }else{
//                 return this.search(root.right)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//    postOrder(root){
//         if(root){
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }


//     levelOrder(){
//         const queue=[];
//         queue.push(this.root);
//         while(queue.length){
//             let curr=queue.shift();
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }




// }

// const bst=new  Tree();
// console.log(bst.isEmpty());
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// console.log(bst.isEmpty());
// console.log('preOrder');
// bst.preOrder(bst.root);
// console.log('inOrder');
// bst.inOrder(bst.root);
// console.log('postOrder');
// bst.postOrder(bst.root);
