export default class Queue {
    constructor() {
        this.queue = {};
        this.tail = 0;
        this.head = 0;
    }
    enqueue(element) {
        this.queue[this.tail++] = element;
    }
}