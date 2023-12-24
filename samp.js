// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function findClosestValue(root, target) {
//     let closest = root.value;
  
//     while (root !== null) {
       
//       if (Math.abs(root.value - target) < Math.abs(closest - target)) {
//         closest = root.value;
//       }
  
     
//       if (target < root.value) {
//         root = root.left;
//       } else if (target > root.value) {
//         root = root.right;
//       } else {
    
//         return root.value;
//       }
//     }
  
//     return closest;
//   }
   
   
//   const root = new TreeNode(9);
//   root.left = new TreeNode(4);
//   root.right = new TreeNode(17);
//   root.left.left = new TreeNode(3);
//   root.left.right = new TreeNode(6);
//   root.right.left = new TreeNode(12);
//   root.right.right = new TreeNode(22);
  
//   const targetValue = 8;
  
 
//   const closestValue = findClosestValue(root, targetValue);
  
//   console.log("Closest value to", targetValue, "is:", closestValue);
  

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findHeight(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = findHeight(root.left);
  const rightHeight = findHeight(root.right);

  // Height of the tree is the maximum of left and right subtree heights, plus 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}

// Example usage:

// Construct a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);

// Find the height of the tree
const height = findHeight(root);

console.log("Height of the tree:", height);
