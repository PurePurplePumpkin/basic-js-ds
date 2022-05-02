const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  root = null;

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (null === this.root) {
      this.root = newNode;
      return;
    }
    let node = this.root;
    while (null !== node.next) {
      node = node.next;  
    }
    node.next = newNode;
  }

  dequeue() {
    let node = this.root;
    if (null !== this.root.next) {
      this.root = this.root.next;
    }
    return node.value;
  }
}

module.exports = {
  Queue
};
