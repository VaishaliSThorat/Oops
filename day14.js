// assignment

let a = 10
a = 30
console.log(a)

var k = 20
k = 80
console.log(k)

const i = 28
console.log(i)
// i = 100
// console.log(i)

// scope

// let is block scope

// var is function scope

// const is block scope

// program 1 

{
    let h = 100
    console.log(h)
}
// console.log(h)

// program 2 

let n = 10
{
    let n = 20
    console.log(n)
}
console.log(n)

// program 3 

let m = 70
{
    console.log(m)
    m = 200
    console.log(m)
}
console.log(m)

// program 4 

const j = 2000
{
    const j = 100
    console.log(j)
}
console.log(j)

// program 5

const f = 2010
{
    console.log(f)
    // f = 201020
    // console.log(f)
}
console.log(f)

// program 6

var g = 8000
function addition(){
    g = 20
    console.log(g)
}
console.log(g)
addition()
console.log(g)
