const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
// const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const elem = new ListNode(value);
    if (this.head) {
      this.tail.next = elem;
      this.tail = elem;
    } else {
      this.head = elem;
      this.tail = elem;
    }
  }

  dequeue() {
    const val = this.head.value
    const step = this.head.next;
    this.head = step;
    return val
  }
}

module.exports = {
  Queue
};
