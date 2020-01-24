const node = function(value) {
  return {
    value,
    left: null,
    right: null,
  }
}

const Tree = function() {
  return {
    root: null,
    addNode,
  }
}

Tree.prototype.addNode = function(node) {
  this.root === null && this.root = node
}
