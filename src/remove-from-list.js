const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  while (l.indexOf(k) !== 1) {
    let ind = l.indexOf(k);
    if (ind === 0) {
      l.splice(ind, 1);
    } else if (ind === l.length - 1) {
      l[ind - 1].next = null;
      l.splice(ind, 1);
    } else {
      l[ind - 1].next = l[ind + 1];
      l.splice(ind, 1);
    }
  }
}

module.exports = {
  removeKFromList,
};
