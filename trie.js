// class TrieNode{
//     constructor(){
//         this.children={};
//         this.end=false;

//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TrieNode();
//     }


//     insert(word){
//         let node= this.root;
//         for(let i=0;i<word.length;i++){
//             if (!node.children[word[i]]) {
//                 node.children[word[i]]=new TrieNode();
//             }

//             node=node.children[word[i]];
//         }
//         node.end=true;
//     }

//     seach(word){
//         let node= this.root;
//         for(let i=0;i<word.length;i++){
//             if (node.children[word[i]]) {
//                 node=node.children[word[i]];
//             }else{
//                 return false
//             }
//         }
//        return node.end

//     }

//     startWith(prefix){
//         let node= this.root;
//         for(let i=0;i<prefix.length;i++){
//             if (node.children[prefix[i]]) {
//                 node=node.children[prefix[i]];
//             }else{
//                 return false
//             }
//         }
//        this.printNode(node,prefix)
//     }

//     remove(word){
//         return this.removeValue(this.root,word,0)
//     }

//     removeValue(node,word,index){
//         if(index===word.length){
//             node.end=false;
//         }

//         let childNode=node.children[word[index]];

//         if (!childNode) {
//             return false;
//         }

//         this.removeValue(childNode,word,index+1)

//         if(childNode.end&&Object.keys(childNode.children).length===0){
//             delete node.children[word[index]]
//         }
//     }


//     print(){
//         return this.printNode(this.root,' ')
//     }

//     printNode(node,currentWord){
//         if(node.end){
//             console.log(currentWord);
//         }
//             for (const i in node.children) {
//                 this.printNode(node.children[i],currentWord+i)
//             }
        
//     }



// }


// const tries = new Trie()
// tries.insert("vishnu")
// tries.insert("vishnus")
// tries.insert("vis")
// tries.insert("hri")
// tries.insert("hridya")
// tries.insert("amma")
// tries.insert("amma")
// tries.insert("pappa")
// tries.insert("kuva")
// tries.insert("jisha");
// console.log(tries.seach("v"));
// tries.startWith('vi')
// // tries.print()
 


// class trieNode{
//     constructor(){
//         this.children={};
//         this.end=false;
//     }
    
// }