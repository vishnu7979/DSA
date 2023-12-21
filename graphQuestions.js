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
//             this.addVertex(v1)
//         }
//         if(!this.list[v2]){
//             this.addVertex(v2)
//         }

//         this.list[v1].add(v2)
//         this.list[v2].add(v1)
//     }

//     hasEdge(v1,v2){
//         return (
//             this.list[v1].has(v2)&&
//             this.list[v2].has(v1)
//         )
//     }

//     //check
//     display(){
//         for(let i=0;i<this.list.length;i++){
//             if (this.list[i]) {
//                 console.log(i+"->"+this.list[i]);
//             }
//         }
//     }

//     removeEdge(v1,v2){
//         this.list[v1].delete(v2)
//         this.list[v2].delete(v1)
//     }

//     removeVertex(vertex){
//         if (!this.list[vertex]) {
//             return null;
//         }
        
//         for(let i of this.list[vertex]){
//             this.removeVertex(i,vertex)
//         }
//         delete this.list[vertex]
//     }

//     BFS(s){
//         let queue=[];
//         let result=[];
//         let visited={};

//         if(!this.list[s]){
//             return result;
//         }
        

//         visited[s]=true
//         queue.push(s);

//         while(queue.length>0){
//                 const curr=queue.shift();
//             result.push(curr);

//             this.list[curr].forEach((neighbour) => {
//                 if(!visited[neighbour]){
//                     visited[neighbour]=true;
//                     queue.push(neighbour);
//                 }
//             });

//         }


//         return result
//     }

//     DFS(s){

//         let  result=[];
//         let  visited={};

//         const recursive=(start)=>{

//             visited[start]=true;
//             result.push(start)


//             this.list[start].forEach((neighbour) => {

//                 if(!visited[neighbour]){
//                    recursive(neighbour)
//                 }
//             });

//         }

//         if(!this.list[s]){
//             return result;
//         }

//         recursive(s);

//         return result

//     }


// }

// const graph=new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A','B')
// graph.addEdge('B','C');
// console.log(graph.hasEdge('C','B'));
// // graph.removeVertex('B');
// graph.display();


// console.log(graph.BFS('A'));
// console.log(graph.DFS('A'));

class Graph{
    constructor(){
        this.list={}
    }

    addVeretx(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }

    addEdge(v1,v2){
        if(!this.list[v1]){
            this.addVeretx(v1)
        }
        if(!this.list[v2]){
            this.addVeretx(v2)
        }

        this.list[v1].add(v2);
        this.list[v2].add(v1);
    }

    hasEdge(v1,v2){
        return (
            this.list[v1].has(v2)&&
            this.list[v2].has(v1)
        )
    }

    display(){
        for(let i in this.list){
            console.log(i+'->'+[...this.list[i]]);
        }
    }


    removeEdge(v1,v2){
        this.list[v1].delete(v2);
        this.list[v2].delete(v1);
    }

    removeVertex(vertex){
        if(this.list[vertex]){
            return 
        }
        for(let i of this.list[vertex]){
            this.removeEdge(i,vertex)
        }
        delete this.list[vertex]
    }

    bfs(s){
        let queue=[]
        let result=[];
        let visited={};
        if(!this.list[s]){
            return result;
        }

        visited[s]=true;
        queue.push(s);

        while(queue.length){
            let curr=queue.shift();
            result.push(curr);

            this.list[s].forEach((neighbour) => {
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    result.push(neighbour);
                }
            });
        }

        return result;

    }

    dfs(s){
        let result=[];
        let visited={};

        const recursive=(start)=>{
            visited[s]=true;
            return result;

            this.list[s].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    this.recursive(neighbour)
                }
            });
        }


        if (!this.list[s]) {
            return result
        }

        recursive(s);

        



    }

}