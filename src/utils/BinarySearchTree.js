class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new TreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  search(key) {
    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    if (!node) return null;
    if (key === node.key) return node.value;
    if (key < node.key) return this._searchNode(node.left, key);
    return this._searchNode(node.right, key);
  }

  inOrderTraversal(callback) {
    this._inOrderTraversal(this.root, callback);
  }

  _inOrderTraversal(node, callback) {
    if (node) {
      this._inOrderTraversal(node.left, callback);
      callback(node);
      this._inOrderTraversal(node.right, callback);
    }
  }
}

export default BinarySearchTree;
