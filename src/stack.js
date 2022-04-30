const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = new Node(element);
    node.next = this.top;
    this.top = node;
    this.length += 1;
    return;
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.top;
    if (!this.top.next) return;
    this.top = this.top.next;
    this.length--;
    return current.value;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.top.value;
  }
}

module.exports = {
  Stack,
};
