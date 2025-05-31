
export class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(value) {
    const node = value instanceof TreeNode ? value : new TreeNode(value);
    node.parent = this;
    this.children.push(node);
    return node;
  }

  find(value) {
    if (this.value === value) return this;
    
    for (const child of this.children) {
      const result = child.find(value);
      if (result) return result;
    }
    return null;
  }

  traverse(callback) {
    callback(this);
    this.children.forEach((child) => child.traverse(callback));
  }

  isLeaf() {
    return this.children.length === 0;
  }

  getDepth() {
    let depth = 0;
    let current = this.parent;
    while (current) {
      depth++;
      current = current.parent;
    }
    return depth;
  }
}

export class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  find(value) {
    return this.root.find(value);
  }

  traverse(callback) {
    if (this.root) {
      this.root.traverse(callback);
    }
  }

  addToParent(parentValue, childValue) {
    const parentNode = this.find(parentValue);
    if (parentNode) {
      return parentNode.addChild(childValue);
    }
    return null;
  }

  getRoot() {
    return this.root;
  }
}