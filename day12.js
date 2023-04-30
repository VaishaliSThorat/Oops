// lexical scope

function addition(){
    let x = 10
    let y = 20
    console.log(x + y)
    function additionB(){
        let a = 100
        let b = 200
        console.log(x + y + a + b)
        function additionC(){
            let s = 10
            let t = 5
            console.log(x + y + a + b + s + t)
        }
        additionC()

    }
    additionB()
}
addition()

// program 2

function greet(){
    console.log("Hello")
    return "Hello Vaishali!"
    console.log("Bye Vaishali!")
}
let a = greet()
console.log(a)

// program 3

function Calculation(x, Y){
    return function(){
        console.log(x + y)
    }
}
let r = Calculation(11,11)
console.log(r)
// console.log(x)
// console.log(y)