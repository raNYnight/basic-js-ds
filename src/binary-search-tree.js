const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.BinaryTree = null;
  };

  root() {
    //root — return root node of the tree
    return this.BinaryTree;
  }

  add(data) {
    //add(data) — add node with data to the tree
    this.BinaryTree = addNodeWithData(this.BinaryTree,data)
    function addNodeWithData(node,data){
      if(!node) {
        return new Node(data)
      }
      if(node.data == data){
        return node
      }
      if(node.data < data){
        node.right = addNodeWithData(node.right,data)
      }
      if(node.data > data){
        node.left = addNodeWithData(node.left, data)
      }
      return node
    }
  }

  has(data) {
    //has(data) — returns true if node with the data exists in the tree and false otherwise
    function hasNodeWithData(node,data){
      if(!node){
        return false
      }
      if(node.data == data){
        return true
      }
      if(node.data < data){
        return hasNodeWithData(node.right,data)
      }
      if(node.data > data){
        return hasNodeWithData(node.left, data)
      }
    }
    return hasNodeWithData(this.BinaryTree,data)
  }

  find(data) {
    //find(data) — returns node with the data if node with the data exists in the tree and null otherwise
    function findNodeWithData(node,data){
      if (node.data === data) {
        return node;
      }
      if (node.data < data && !node.right) {
        return null;
      }
      if (node.data > data && !node.left) {
        return null;
      }
      if(node.data < data){
        return findNodeWithData(node.right,data)
      }
      if(node.data > data){
        return findNodeWithData(node.left, data)
      }
    }
    return findNodeWithData(this.BinaryTree, data);
  }

  remove(data) {
    // remove(data) — removes node with the data from the tree if node with the data exists
    function removeNodeWithData(node, data){
      if(!node){
        return null
      }
      if(node.data < data){
        node.right = removeNodeWithData(node.right,data)
        return node
      }
      if(node.data > data){
        node.left = removeNodeWithData(node.left, data)
        return node
      }
      if(!node.right && !node.left){
        return null
      }
      if(!node.right){
        node = node.left
        return node
      }
      if(!node.left){
        node = node.right
        return node
      }
      let maxLeft = node.left;
      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }
      node.data = maxLeft.data;
      node.left = removeNodeWithData(node.left, maxLeft.data);
      return node;
    }
    this.BinaryTree = removeNodeWithData(this.BinaryTree, data)
  }

  min() {
    // min — returns minimal value stored in the tree (or null if tree has no nodes)
    function findMinValue(node) {
      if (!node) {
        return null
      }
      if (!node.left) {
        return node.data

      } else {
        return findMinValue(node.left)
      }
    }
    return findMinValue(this.BinaryTree)
  }

  max() {
    // max — returns maximal value stored in the tree (or null if tree has no nodes)
    function findMaxValue(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data
      } else {
        return findMaxValue(node.right)
      }
    }
    return findMaxValue(this.BinaryTree)
  }
  }

module.exports = {
  BinarySearchTree
};