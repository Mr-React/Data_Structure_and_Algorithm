class Queue {
  /**
   * Queue class constructor
   * @constructor
   */
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  /**
   * enqueue method to add an element
   * @param {any} element - Adds element in Queue
   */
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  /**
   * Removes element from Queue
   * @returns any
   */
  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
    return null;
  }

  /**
   * Returns front/head element of queue if queue is empty it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  /**
   * Checks Queue is empty or not - returns true if Queue is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.rear - this.front === 0;
  }

  /**
   * Returns the size of Queue
   * @returns number
   */
  size() {
    return this.rear - this.front;
  }

  /**
   * Prints the all elements of Queue as string
   */
  print() {
    console.log(this.items);
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
