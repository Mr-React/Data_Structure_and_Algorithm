class Node {
  /**
   * Node class constructor
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /**
   * LinkedList class constructor
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Checks list is empty or not, return true if list is empty otherwise false
   * @returns boolean
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * getSize method returns the size of the list
   * @returns number
   */
  getSize() {
    return this.size;
  }

  /**
   * prepend method add element at the begining of the list
   * Big O - O(1)
   * @param {any} value
   */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /**
   * append method add element at the end of the list
   * Big O - O(n)
   * @param {any} value
   */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  /**
   * removeFromFront method removes the element from the front of list
   * @returns any
   */
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  /**
   * removeFromEnd method removes the element from the end of list
   * @returns any
   */
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      let value = this.tail.value;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      this.size--;
      return value;
    }
  }

  /**
   * print method prints the list
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let str = "";
      while (curr) {
        str = str + `${curr.value} `;
        curr = curr.next;
      }
      console.log(str);
    }
  }
}
