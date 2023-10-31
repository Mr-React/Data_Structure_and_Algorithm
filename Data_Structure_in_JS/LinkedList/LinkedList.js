class Node {
  /**
   * Node class constructor
   * @constructor
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next;
  }
}

class LinkedList {
  /**
   * LinnkedList class constructor
   * @constructor
   */
  constructor() {
    this.head = null;
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
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  /**
   * insert method inserts the element at the given index
   * @param {value} value
   * @param {number} index
   * @returns
   */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  /**
   * removeFrom method removes the element from list as the given index
   * @param {number} index
   * @returns any
   */
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.next;
      this.head = this.head.next;
      return removeNode.value;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  /**
   * removeValue method removes the element from list when give value matches
   * @param {any} value
   * @returns any
   */
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if ((this.head.value = value)) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
    }
    return null;
  }

  /**
   * search method returns the index of given value
   * @param {any} value
   * @returns number
   */
  search(value) {
    if (this.isEmpty()) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return null;
  }

  /**
   * reverse method reverse the linked list
   */
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  /**
   * print method prints the list
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());

list.prepend(30);
list.prepend(10);
list.prepend(20);

list.print();

list.append(40);
list.append(50);

list.prepend(60);
list.print();

list.insert(70, 2);
list.print();

console.log(list.isEmpty());
console.log(list.getSize());

list.removeFrom(2);
console.log("after removed by index");
list.print();

list.removeValue(30);
console.log("after removed by value");
list.print();

console.log("Searching Index of value 40");
console.log("Index: ", list.search(40));

list.print();
console.log("List reversed");
list.reverse();
list.print();

console.log(list.isEmpty());
console.log(list.getSize());
