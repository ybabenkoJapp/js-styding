// we need to define node data structure
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(data) {
        let node = new Node(data), current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };
    remove(data) {
        let current = this.head, previous = null;
        // we iterate through the list
        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next
                } else {
                    previous.next = current.next;
                }
                this.size--
                return current.data;
            }
            // override the pointer
            previous = current;
            current = current.next;
        }
        return -1;
    };
    isEmpty() {
        return this.size === 0;
    };
    get(data) {
        let current = this.head;
        if (!current) {
            return 'linked list is empty';
        }
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        // return null if data is mismatch
        return null;
    };
    printListData() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    };
}
