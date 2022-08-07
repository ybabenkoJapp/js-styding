// implementation by class
export default class Stack {
    // stack implements by array
    constructor() {
        this.store = [];
    }
    push = (item) => this.store.push(item);
    peek = () => {
        if (!this.store[this.store.length - 1]) {
            return null;
        }
        return this.store[this.store.length - 1]
    };
    showStack = () => {
        if (!this.store.length) {
            return null;
        }
        return this.store;
    }
    pop = () => this.store.pop();
    get size () {
        return this.store.length;
    }
    isEmpty = () => {
        return this.size === 0;
    }
}

// implementation by functions
// const stack = [];
// const push = (item) => stack.push(item);
// const pop = () => stack.pop();
