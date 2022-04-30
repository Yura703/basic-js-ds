const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.coreRoot = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.coreRoot;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.coreRoot = addNode(this.coreRoot, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError("Not implemented");
    //remove line with error and write your code here
    return hasNode(this.coreRoot, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    //возвращает узел с узломdata if с существующим в дереве и в противном случаеdatanull
    return hasNode(this.coreRoot, data);

    function hasNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.coreRoot = deliteNode(this.coreRoot, data);

    function deliteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deliteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deliteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;

        node.left = deliteNode(node.left, maxLeft.data);

        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.coreRoot) {
      return null;
    }

    let node = this.coreRoot;
    console.log(node);

    if (!node.left) return node.data;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.coreRoot) {
      return null;
    }

    let node = this.coreRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
