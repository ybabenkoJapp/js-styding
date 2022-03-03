'use strict';

console.log('Try to get ref on Globsl obj', this)
console.log('Request data...')
function f() {
    console.log('this inside the function', this);
}
f();

// v = 100;
// console.log(window.v)
// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'serw',
//         port: 2000,
//         ststus: 'ok'
//     }

//     setTimeout(() => {
//         backendData.modifed = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')

//     const backendData = {
//         server: 'serw',
//         port: 2000,
//         status: 'ok'
//     }
//     reject(backendData);
//     },2000)
// })

// promise.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             reject(data)
//         }, 2500)
//     })
// }).then((clientData) => {
//     clientData.fromSecondPromise = true
//     return clientData 
// }).catch(error => console.error('error', error)).finally(res => console.log('finally',res))
// }).catch(error => {
//     return console.log('Error', error)
// })
const sleep = ms => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve()
         }, ms)
     })
}

// sleep(2000).then(() => console.log('after 2 sec'))
// sleep(3000).then(() => console.log('after 3 sec'))

Promise.all([sleep(2000), sleep(3000), sleep(6000)]).then(() => {
    console.log('All promise')
})
Promise.race([sleep(112),sleep(110),sleep(100)]).then(()=> console.log('Race promises'))

const prom = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve('result')
        const error = new Error('Time is over')
        reject(error)
    }, 3500);
})
prom.then((result) => {
    alert(`fulfilled ${result}`)
}, (error) => {
    console.error(`Reject ${error}`)
})


let textPronise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('result')
    }, 1000);
    setTimeout(() => {
        reject(new Error("ignore"))
    }, 2000)
})

textPronise.then(function(onResolve) {
    console.log('must work:', onResolve)
}, function (onReject) {
    console.log('think it\'ll be ignored', onReject)
})




































