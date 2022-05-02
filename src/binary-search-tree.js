const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;

  root() {
    if (null === this.rootNode) {
      return null;
   } else {
     return this.rootNode;
   }
  }

  add(data) {
    let node = new Node(data);
    if (null === this.rootNode) {
      this.rootNode = node;
    } else {
      this.addNode(this.rootNode, node);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (null === node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (null === node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
     }
    }
  }

  has(data) {
    return (null !== this.find(data));
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (null === node) {
        return null;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    }
    return node;
  }

  remove(data) {
    this.root = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (null === node) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (null === node.left && null === node.right) {
        return null;
      }
      if (null === node.left) {
        node = node.right;
        return node;
      } else if (null === node.right) {
        node = node.left;
        return node;
      }
      let minNode = this.minNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }  
  }

  min() {
    return this.minNode(this.rootNode).data;
  }

  minNode(node) {
    if (null === node.left) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  max() {
    return this.maxNode(this.rootNode).data;
  }

  maxNode(node) {
    if (null === node.right) {
      return node;
    } else {
      return this.maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};