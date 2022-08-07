import Stack from "./implement-adt/stack.js";
import { Car } from "./fixtures/helper.js";
import LinkedList from "./implement-adt/linkedList.js";

const stack = new Stack();
const ford = new Car('Ford','Focus 3', 2014);
const mazda = new Car ('Mazda', 'Mazda 3', 2016);
// stack.push(ford);
// stack.push(mazda);

const ll = new LinkedList();
// ll.insert(100);
// ll.insert(110);
// ll.insert(120);
ll.insert(130);
// ll.remove(120);
let el = ll.get(120);
ll.printListData();

// console.log(stack.isEmpty());
// console.log(stack.size);
// console.log(stack.showStack());
// console.log('peek', stack.peek());
console.log('ll', ll);
console.log('el', el);