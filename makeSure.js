//treeeeeeeeeeeeeeeeeeeeeeeee

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }

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

// greaphhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

// class Graph{

//     constructor(){
//         this.list={}
//     }

//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set();
//         }
//     }

//     addEdge(v1,v2){
//         if(!this.list[v1]){
//             this.addVertex(v1);
//         }
//         if(!this.list[v2]){
//             this.addVertex(v2);
//         }

//             this.list[v1].add(v2)&&
//             this.list[v2].add(v1)
//     }

//     hasEdge(v1,v2){
//         return this.list[v1].has(v2)&&
//         this.list[v2].has(v1)
//     }

//     display(){
//         for(let i in this.list){
//             console.log(i+"->"+[...this.list[i]]);
//         }
//     }

//     removeEdge(v1,v2){
//         this.list[v1].delete(v2);
//         this.list[v2].delete(v1);
//     }

//     removeVertex(vertex){

//         if(!this.list[vertex]){
//             return null;
//         }
//         for (let item of this.list[vertex]){
//             this.removeEdge(item,vertex)
//         }
//         delete this.list[vertex]
//     }

//     BFS(s){
//         const queue=[];
//         const result=[];
//         const visited={};

//         if(!this.list[s]){
//             return result;
//         }

//         visited[s]=true;
//         queue.push(s);
//         while(queue.length>0){
//             const curr=queue.shift();
//             result.push(curr);

//             this.list[curr].forEach((element) => {
//                 if (!visited[element]) {
//                     visited[element]=true;
//                     queue.push(element)
//                 }
//             });
//         }
//         return result;
//     }

//     DFS(s){
//         const result=[];
//         const visited={};

//         const recursive=(start)=>{
//             visited[start]=true;
//             result.push(start)

//             this.list[start].forEach((neighbour)=>{
//                 if(!visited[neighbour]){
//                     // visited[neighbour]=true;
//                     // result.push(neighbour)
//                     recursive(neighbour);
//                 }
//             })
//         }

//         if(!this.list[s]){
//             return result;
//         }

//         recursive(s)

//         return result
//     }

// }

// const graph=new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A','B')
// graph.addEdge('B','C');
// console.log(graph.hasEdge('C','D'));
// // graph.removeVertex('B');
// graph.display();

// console.log(graph.BFS('A'));
// console.log(graph.DFS('B'));

//tree Fullllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }


// function isBST(root){
//     if(root===null){
//         return true
//     }
     
//     if(root.left&&root.left.value>root.value){
//         return false
//     }

//     if(root.right&&root.right.value<root.value){
//         return false
//     }
//     return isBST(root.left)&&isBST(root.left);

// }

// const root=new Node(10);
// root.left=new Node(6);
// root.right=new Node(30);
// console.log(isBST(root));


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,......................



// class BinarySerachTree {
//   constructor(){
//     this.root=null;
//   }

// isEmpty(){
//    return this.root===null;
// }

// insert(value){
//     const node =new Node(value);
//     if(this.isEmpty()){
//         this.root=node
//     }else{
//         this.insertNode(this.root,node)
//     }
// }

// insertNode(root,node){
//     if (root.value>node.value) {
//         if (root.left===null) {
//             root.left=node;
//         }else{
//             this.insertNode(root.left,node)
//         }
//     }else{
        
//             if (root.right===null) {
//                 root.right=node;
//             }else{
//                 this.insertNode(root.right,node)
//             }    
//     }
// }

// search(root,value){
//     if(!root){
//         return false;
//     }

//     if (root.value===value) {
//         return true
//     }else if(root.value>value){
//         return this.search(root.left,value)
//     }else{
//         return this.search(root.right,value)
//     }
// }

// preOrder(root){
//     if(root){
//         console.log(root.value);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
// }

// postOrder(root){
//     if(root){
//         this.postOrder(root.left);
//         this.postOrder(root.right);
//         console.log(root.value);
//     }
// }


// inOrder(root){
//     if(root){
//         this.inOrder(root.left);
//         console.log(root.value);
//         this.inOrder(root.right);
//     }
// }

// levelOrder(){
//     const queue=[];
//     queue.push(this.root);
//     while (queue.length) {
//         let curr=queue.shift();
//         console.log(curr.value);
//         if (curr.left) {
//             queue.push(curr.left)
//         }
//         if (curr.right) {
//             queue.push(curr.right)
//         }
//     }
    
// }


// }


// const tree=new BinarySerachTree();
// console.log(tree.isEmpty());
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// console.log(tree.isEmpty());
// console.log(tree.search(this.root,10));
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// tree.inOrder(tree.root);
// tree.levelOrder();


// console.log(isBST(tree.root));


// graph

class Graph{
    constructor(){
        this.list===null;
    }

    addVertex(v){
        if(!this.list[v]){
            this.list[v]= new Set()
        }
    }

    addEdge(v1,v2){
        if (!this.list[v1]) {
            this.addVertex(v1)
        }

        if (!this.list[v2]) {
            this.addVertex(v2)
        }

        this.list[v1].add(v2)
        this.list[v2].add(v1)
    }

    hasEdge(v1,v2){
        return this.list[v1].has(v2)&&
        this.list[v2].has(v1)
    }

    display(){
        for (let i = 0; i < this.list.length; i++) {
            console.log(i+"=>"+this.list[i]);
        }

    }

    removeEdge(v1,v2){
        this.list[v1].delete(v2);
        this.list[v2].delete(v1);
    }

    removeVertex(v){
        if(this.list[v1]){
            return null;
        }

        for (const key in this.list[v]) {
             this.removeEdge(key,v)
        }

        delete this.list[v];
    }

    BFS(s){
        const queue=[];
        const result=[];
        const visited={}

        

    }

    DFS(){

    }

}

const graph=new Graph();

graph.display()