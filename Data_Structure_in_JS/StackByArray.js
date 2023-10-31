class Stack {
  /**
   * Stack class constructor
   * @constructor
   */
  constructor() {
    this.items = [];
  }

  /**
   * Push method to add an element
   * @param {any} element - Adds element in stack
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * Removes element from stack
   * @returns any
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Returns Top of the stack element if stack is empty it returns null
   * @returns any
   */
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  /**
   * Checks Stack is empty or not - returns true if stack is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the size of Stack
   * @returns number
   */
  size() {
    return this.items.length;
  }

  /**
   * Prints the all elements of stack as string
   */
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log("Peek() ", stack.peek());
console.log("Stack is Empty: ", stack.isEmpty());

stack.push(10);
console.log("Stack is Empty: ", stack.isEmpty());
stack.push(30);
stack.push(20);

console.log("Stack size: ", stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
