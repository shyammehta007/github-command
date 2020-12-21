// const animal = {
//     type: 'domistic',
//     legs: 4
// }

// // const rabbit = {
// //     color: 'white'
// // }
// function Rabbit(color){
//     this.color = color
// }
// Rabbit.prototype = animal
// const rabbit = new Rabbit('white')


// for(rabbits in rabbit){
//     console.log(rabbits)
// }   

// const obj ={
//     value: 'shyam is a gentleman',
//     behaviour(){
//         const that = this
//         var helper = function(){
//             console.log(that.value)
//         }    
//         helper()
//     }
// }
// obj.behaviour()


// Function.prototype.bind = function (args) {
//     const obj = args;
//     const thatFunction = this
//     return function (...rest) {
//         thatFunction.apply(obj, rest)
//     }
// }

// const obj = {
//     name: 'Tekion'
// }

// function f(firstName,LastName){
//     console.log(this.name + ' has hired ' + firstName + ' ' + LastName)
// }
// const s = f.bind(obj)
// s('shyam','mehta')

// const myFunc = function () {
//     let myVal = 0
//     return {
//         increment(inc) {
//             myVal += inc
//             console.log(myVal)
//         }
//     }
// }
// const obj = myFunc()
// obj.increment(1)
// obj.increment(3)
// console.log(typeof (() => { }))

// const Obj = function () {
//     this.name = 'shyam'
//     function print() {
//         console.log(`${this.name} is my name`)
//     }
// }
// const o1 = new Object()
// console.log(o1.__proto__)
// console.log(Object.prototype)
// const dummy = Object.create(Obj.prototype)

// console.log(dummy.name)

// Function.prototype.debounce = function (func, ms) {
//     let interval
//     return function (...args) {
//         clearInterval(interval)
//         interval = setTimeout(() => {
//             func(...args)
//         }, ms)
//     }
// }

// const p1 = Promise.resolve('2')

// function All(args) {
//     return new Promise((resolve, reject) => {

//     })
// }

// const p2 = Promise.all(['1', Promise.reject(2)])
// console.log(p2)

function all(args) {
    let result = [];
    let error = null
    for (let i = 0; i < args.length; i++) {
        if (error) break;
        args[i].then((res) => { result.push(res) }).catch((e) => {
            error = e
        })
    }
    while (!error || result.length !== args.length) { console.log(result) }
    return new Promise((resolve, reject) => {
        if (error) reject(error)
        resolve(result)
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hi'), 00)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello'), 5000)
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('No'), 10000)
})




const p3 = all([p2, p4, p1])
console.log(p3.then((x) => { console.log(x) }))