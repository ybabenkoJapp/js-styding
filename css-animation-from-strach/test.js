let tests = document.querySelectorAll('.test');
/* tests.forEach((test, i) => alert(`test-${i}`)) */
function s(array) {
 let randomIndex,
 currentIndex = array.length;
 while(randomIndex !== 0) {
 randomIndex = Math.floor(Math.random() * currentIndex);
 currentIndex--;
 [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
 }
 return array;
}

// const rs = s(tests);
// console.log('tests',rs)
function r(min, max, length) {
let optArr = [...Array(max-min + 1).keys()];
return s(optArr).splice(0, length).map(el => el + min)
}

console.log(r(0, 5, 5))