class Graph{
    constructor(){
        this.list={}
    }

    addVertex(vertex){
        if (!this.list[vertex]) {
            this.list[vertex]=new Set()
        }
    }

    addEdge(v1,v2){
        if (!this.list[v1]) {
            this.addVertex(v1)
        }
        if (!this.list[v2]) {
            this.addVertex(v2)
        }

        this.list[v1].add(v2);
        this.list[v2].add(v1);
    }

    hasEdge(v1,v2){
        return(
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
        this.list[v1].delete(v2)
        this.list[v2].delete(v1)
    }

    removeVertex(vertex){
        if(!this.list[vertex]){
            return
        }
        for(let i in this.list[vertex]){
            this.removeEdge(i,vertex)
        }
        delete this.list[vertex]
    }

}

const graph=new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','B')
graph.addEdge('B','C');
graph.removeVertex('B');
graph.display();

// console.log(graph.hasEdge('C','B'));


