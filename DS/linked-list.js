class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }

    const currentNode = this.traverseToIndex(index - 1);
    const holdingPointer = currentNode.next;
    const newNode = new Node(value);
    currentNode.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length;
    }

    const currentNode = this.traverseToIndex(index - 1);
    const unwantedNode = currentNode.next;
    currentNode.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;

    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      this.length++;
      return this.printList();
    }

    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    const newNode = new Node(value);
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length;
    }

    const currentNode = this.traverseToIndex(index);
    const leader = currentNode.prev;
    const follower = currentNode.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());
// const myDoubleLinkedList = new DoubleLinkedList(10);
// myDoubleLinkedList.append(5);
// myDoubleLinkedList.append(16);
// myDoubleLinkedList.prepend(1);
// myDoubleLinkedList.insert(2, 99);
// myDoubleLinkedList.insert(20, 88);
// myDoubleLinkedList.remove(2);
// console.log(myDoubleLinkedList.printList());
