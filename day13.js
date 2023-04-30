// lexical scope


// closures


// function additionE(){
//     console.log("hello")
//     return 8+9
//     console.log("Bye")
// }

// let q1 = additionE()
// console.log(q1)

// function additionA(){
//     let a = 100
//     let b = 50
//     return function(){
//         console.log(a+b)
//     }
// }

// // let q2 = additionA()

// let q2 = function(){
//     console.log(a+b)
// }

// console.log(q2)

// actual differences between arrow function and function expression 

// function declaration

function add(x, y){
    return x + y
}
let q1 = add(10, 5)
console.log(q1)

// function expression

let add2 = function(x, y){
    return x + y
}
let q2 = add2(12, 6)
console.log(q2)

// arrow function

let add3 = (x, y)=> x + y
let q3 = add3(10, 20)
console.log(q3)

let k = [11, 22, 33, 44, 55]

let q33 = k.map(el=>el + 2)
console.log(q33)

let q44 = k.filter(el => el > 15)
console.log(q44)

var firstName = "Vishal"
var lastName = "Thorat"

// let info = {
//     firstName:"Vaishali",
//     lastName:"Thorat",
//     age: 30,
//     rollNo: 15,
//     display:function(){
//         console.log(this)//info
//         console.log(this.firstName + this.lastName)

//         function display2(){
//             console.log(this)// window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }

// }
// info.display()

// let info = {
//     firstName:"Vaishali",
//     lastName:"Thorat",
//     age: 30,
//     rollNo: 15,
//     display:function(){
//         console.log(this)//info
//         console.log(this.firstName + this.lastName)

//         let display2 = ()=> {
//             console.log(this)// info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }

// }
// info.display()

let info = {
    firstName:"Vaishali",
    lastName:"Thorat",
    age: 30,
    rollNo: 15,
    display:()=>{
        console.log(this)//window
        console.log(this.firstName + this.lastName)

        let display2 = ()=> {
            console.log(this)// window
            console.log(this.firstName + this.lastName)
        }
        display2()
    }

}
info.display()

// let y = 100
// console.log(window.y)
var y = 1000
console.log(window.y)