class Graph{
    constructor(){
        this.list={}

    }

    addVertex(vertex){
        if (!this.list[vertex]) {
            this.list[vertex]=new Set();
        }
    }

    addEdge(v1,v2){
        if (!this.list[v1]){
            this.addVertex(v1)
        }
        if (!this.list[v2]){
            this.addVertex(v2)
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

    print(){
        for(let i in this.list){
            console.log(i+"->"+[...this.list[i]]);
        }
    }

    removeEdge(v1,v2){
        this.list[v1].delete(v2)
        this.list[v2].delete(v1)
    }

    removeVertex(vertex){
        for (const i of this.list[vertex]) {
            this.removeEdge(i,vertex)
        }
        delete this.list[vertex]
    }

    bfs(start){
        const queue=[];
        const result=[];
        const visited={};


        if(!this.list[start]){
            return result;
        }

        visited[start]=true;
        queue.push(start);

        while(queue.length){
            let curr=queue.shift();
            result.push(curr);
            this.list[curr].forEach((neighbour) => {
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }

    dfs(start){
        const result=[];
        const visited={};

        const Recursive=(startvertex)=>{
        visited[startvertex]=true;
        result.push(startvertex);

        this.list[startvertex].forEach((neighbour) => {
            if(!visited[neighbour]){
                Recursive(neighbour)
            }
        });


        }

        if(!this.list[start]){
            return result;
        }

        Recursive(start);

        return result;


    }





}

const graph=new Graph();
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addEdge('a','b');
graph.addEdge('a','c');
graph.addEdge('b','d');
// graph.removeVertex('a')
console.log(graph.bfs('a'));
console.log(graph.dfs('a'));
graph.print();
