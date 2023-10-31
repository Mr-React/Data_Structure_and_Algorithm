class OptimizedStack {
  /**
   * Optimized Stack class constructor
   * @constructor
   */
  constructor() {
    this.items = {};
    this.top = -1;
  }

  /**
   * Push method to add an element
   * @param {any} element - Adds element in stack
   */
  push(element) {
    if (this.top === -1) {
      this.top++;
    }
    this.items[this.top] = element;
    this.top++;
  }

  /**
   * Removes element from stack
   * @returns any
   */
  pop() {
    if (!this.isEmpty()) {
      const item = this.items[this.top - 1];
      delete this.items[this.top - 1];
      this.top--;
      return item;
    }
    return null;
  }

  /**
   * Returns Top of the stack element if stack is empty it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.top - 1];
    }
    return null;
  }

  /**
   * Checks Stack is empty or not - returns true if stack is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.top === -1;
  }

  /**
   * Returns the size of Stack
   * @returns number
   */
  size() {
    if (!this.isEmpty()) {
      return this.top;
    }
    return 0;
  }

  /**
   * Prints the all elements of stack as string
   */
  print() {
    console.log(this.items);
  }
}

const stack = new OptimizedStack();
console.log("size", stack.size());
console.log(stack.isEmpty());

stack.push(10);
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.print();
console.log("pop", stack.pop());
console.log("peek", stack.peek());

stack.print();
console.log("size", stack.size());
