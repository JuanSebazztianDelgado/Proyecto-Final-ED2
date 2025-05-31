
export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  front() {
    return this.peek();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  clone() {
    const newQueue = new Queue();
    newQueue.items = [...this.items];
    return newQueue;
  }

  // Método útil para debugging
  toArray() {
    return [...this.items];
  }
}