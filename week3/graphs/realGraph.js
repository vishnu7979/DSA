// class Graph{
//     constructor(){
//         this.list={}
//     }

//     addVertex(vertex){
//         if (!this.list[vertex]) {
//             this.list[vertex]=new Set()
//         }
//     }

//     addEdge(v1,v2){
//         if (!this.list[v1]) {
//             this.addVertex(v1)
//         }
//         if (!this.list[v2]) {
//             this.addVertex(v2)
//         }

//         this.list[v1].add(v2);
//         this.list[v2].add(v1);
//     }

//     hasEdge(v1,v2){
//         return(
//             this.list[v1].has(v2)&&
//             this.list[v2].has(v1)
//         )
//     }

//     display(){
//         for(let i in this.list){
//             console.log(i+'->'+[...this.list[i]]);
//         }
//     }

//     removeEdge(v1,v2){
//         this.list[v1].delete(v2)
//         this.list[v2].delete(v1)
//     }

//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return
//         }
//         for(let i of this.list[vertex]){
//             this.removeEdge(i,vertex)
//         }
//         delete this.list[vertex]
//     }

//     bfs(startingVertex){
//         const visited={}
//         const queue=[];
//         const result=[];


//         if(!this.list[startingVertex]){
//             return result;
//         }

//         visited[startingVertex]=true;
//         queue.push(startingVertex);

//         while (queue.length>0) {
//             const element=queue.shift();
//             result.push(element);

//             this.list[element].forEach((neighbour) => {
//                 if(!visited[neighbour]){
//                     visited[neighbour]=true;
//                     queue.push(neighbour)
//                 }
//             });
//         }
//         return result;
//     }

//     dfs(startingVertex){
//         let result=[];
//         let visited={};

//         const Rescursive=(vertex)=>{
//             visited[vertex]=true;
//             result.push(vertex);

//             this.list[vertex].forEach((neighbour)=>{
//                 if(!visited[neighbour]){
//                     Rescursive(neighbour);
//                 }
//             })
//         }

//         if(!this.list[startingVertex]){
//             return result;
//         }

//         Rescursive(startingVertex);
       
//         return result
        
//     }

// }

//     const graph=new Graph();
//     graph.addVertex('A');
//     graph.addVertex('B');
//     graph.addVertex('C');
//     graph.addEdge('A','B')
//     graph.addEdge('B','C');
//     console.log(graph.hasEdge('C','B'));
//     // graph.removeVertex('B');
//     graph.display();

//     console.log(graph.bfs('A'));
//     console.log(graph.dfs('A'));




