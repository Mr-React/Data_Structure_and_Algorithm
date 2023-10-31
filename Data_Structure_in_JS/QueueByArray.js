class Queue {
  /**
   * Queue class constructor
   * @constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * enqueue method to add an element
   * @param {any} element - Adds element in Queue
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * Removes element from Queue
   * @returns any
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Checks Queue is empty or not - returns true if Queue is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns front/head element of queue if queue is empty it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  /**
   * Returns the size of Queue
   * @returns number
   */
  size() {
    return this.items.length;
  }

  /**
   * Prints the all elements of Queue as string
   */
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());

queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);

queue.print();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());

console.log(queue.dequeue());
queue.print();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
