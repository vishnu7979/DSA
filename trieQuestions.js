class TrieNode{
    constructor(){
        this.children={};
        this.end=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }

    insert(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
             if(!node.children[word[i]]){
                node.children[word[i]]=new TrieNode()
             }
            node=node.children[word[i]]
            
        }
        node.end=true; 
    }

    search(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
             if(node.children[word[i]]){
                node=node.children[word[i]]
             }else{
                return false
             }
        }
       return node.end;
    }

    startWith(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
             if(node.children[word[i]]){
                node=node.children[word[i]]
             }else{
                return false
             }
        }
       this.printNode(node,value)

    }

    remove(value){
        return this.removeValue(this.root,value,0)
    }

    removeValue(node,value,index){
        if(index===value.length){
            node.end=false
        }

        let childNode=node.children[value[index]];

        if (!childNode) {
            return;       
        }

        this.removeValue(childNode,value,index+1);

        if (!childNode.end&&Object.keys(childNode.children).length===0) {
            delete node.children[value[index]];
        }


    }

    print(){
        return this.printNode(this.root,' ')
    }

    printNode(node,value){
        if(node.end){
            console.log(value);
        }

        for (const char in node.children) {
          
                this.printNode(node.children[char],value+char)
                
            
        }
    }




}

const tries = new Trie();

tries.insert("Cat");
tries.insert("nithi");
tries.insert("nithin");
console.log(tries.search("nithin"));
tries.remove("nithin");
console.log(tries.search("nithin"));

// console.log("Words starting with 'n':");
// tries.startWith("n");
tries.print();

