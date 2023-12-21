class TrieNode{
    constructor(){
        this.children={};
        this.end=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root;
        for (let i = 0; i < word.length; i++) {
           if (!node.children[word[i]]) {
            node.children[word[i]] =new TrieNode()
          }

          node=node.children[word[i]];
            
        }
        node.end=true;
    }

    search(word){
        let node=this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node=node.children[word[i]];
           } else {
            return false;
           }
             
         }
        return node.end 
    }

    startWith(word){
        let node=this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node=node.children[word[i]];
           } else {
            return false;
           }
             
         }
        this.printNode(node,word) 
    }

    remove(word){
        return this.removeHelper(this.root,word,0)
    }

    removeHelper(node,word,index){
        if(index===word.length){
            node.end=false
        }

        let ChildNode=node.children[word[index]];
        if(!ChildNode){
            return 
        }

        this.removeHelper(ChildNode,word,index+1);

        if(!ChildNode.end&&Object.keys(ChildNode.children).length===0){
            delete node.children[word[index]]
        }

    }

    print(){
        return this.printNode(this.root, ' ')
    }

    printNode(node,currentWord){
        if(node.end){
            console.log(currentWord);
        }

        for(let char in node.children){
            this.printNode(node.children[char],currentWord+char)
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