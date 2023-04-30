// function constructor
// program 1 

function PersonM(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    // this.display = function () {
    //     console.log(this.firstName + this.lastName)
    // }
}

let vaishali = new PersonM("vaishali", "thorat", 30)
let anvit = new PersonM("anvit", "lokhande", 7)

console.log(vaishali)
console.log(anvit)

// // program 2 
function PersonN(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
}

let anjali = new PersonN("anjali", "sharma", 26)
let tina = new PersonN("tina", "kapoor", 27)
console.log(anjali)
console.log(tina)

PersonM.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
PersonN.prototype.country = "india"

vaishali.display()
anvit.display()

console.log(anjali.country)
console.log(tina.country)

// // every object has __proto__=== parent.prototype
console.log(anjali.__proto__ === PersonN.prototype)
console.log(tina.__proto__ === PersonN.prototype)
console.log(anjali.hasOwnProperty('firstName'))
console.log(tina.hasOwnProperty('country'))
console.log(anjali.country)

console.log(tina)
vaishali.display()

function PersonO(firstName, lastName, age, rollNo) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = rollNo
    // this.display = function () { this.firstName + this.lastName }
}

let kavya = new PersonO("kavya", "pandey", 23, 33)
let maya = new PersonO("maya", "raut", 28, 22)
console.log(kavya)
console.log(maya)

PersonO.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
PersonO.prototype.country = "India"

kavya.display()
maya.display()

console.log(kavya.country)
console.log(maya.country)

console.log(kavya.__proto__ === PersonO.prototype)
console.log(maya.__proto__ === PersonO.prototype)
console.log(kavya.hasOwnProperty('country'))
console.log(maya.hasOwnProperty('firstName'))

// // array

let names = ["chinmay", "ram", "sham", "mohan"]
console.log(names.__proto__ === Array.prototype)
console.log(names)
names.reverse()
console.log(names)

class PersonP {
    constructor(fn, ln, ag, rollNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
    display() {
        console.log(this.firstName + this.lastName)
    }

}

let m = new PersonP("anvi", "kamad", 23, 33)
let n = new PersonP("vani", "kapoor", 29, 55)

console.log(m)
console.log(n)
m.display()
n.display()

let obj = {
    init: function (fn, ln, ag, rollNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
    }
    ,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

let q1 = Object.create(obj)
console.log(q1)

q1.init("varsha", "rao", 44, 55)
q1.display()