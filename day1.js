// object literal
// program 1

let vaishali = {
    firstName: "vaishali",
    lastName: "thorat",
    age:30,
    rollNo:8
}
console.log(vaishali)

let amol = {
    firstName: "amol",
    lastName: "rao",
    age:25,
    rollNo:9
}

// function constructor
// template
function Person(fn,ln, ag, rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}

let revati = new Person("revati", "thorat", 29, 6)
let kajal = new Person("kajal", "thorat", 27, 7)
console.log(revati)
console.log(kajal)

//es6

class PersonA {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
    }
}

let chaitali = new PersonA("chaitali", "thorat", 25, 10)
let rohan = new PersonA("rohan", "thorat", 23, 4)

console.log(chaitali)
console.log(rohan)

rohan.age = 21
rohan['age'] = 22
console.log(rohan)

chaitali.age = 26

// object.create method

let akshada = Object.create({})
console.log(akshada)
akshada.firstName = "akshada"
akshada.lastName = "thorat"
akshada.age = 20
akshada.rollNo = 23
console.log(akshada)
