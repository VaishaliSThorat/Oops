// Es6

class Person{
    firstName = undefined
    lastName = undefined
    age = undefined

    display(){
        console.log(this.firstName + this.lastName)
    }
}
let amol = new Person()
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 28
console.log(amol)
amol.display()

//program 2 

// constructor

class PersonB {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amolC = new PersonB("amol", "rao", 77)
console.log(amolC)
amolC.display()

// program 3 
// setting the value using set method and get method

class PersonE {
    setFirstName(fn){
        this.FirstName = fn
    }
    setLastName(ln){
        this.LastName = ln
    }
    setAge(ag){
        this.Age = ag
    }
    getFirstName(){
        return this.FirstName
    }
    getLastName(){
        return this.LastName
    }
    getAge(){
        return this.Age
    }
}

let amolG = new PersonE()
console.log(amolG)
amolG.setFirstName('amolr')
amolG.setLastName('rao')
amolG.setAge(44)
console.log(amolG)

console.log(amolG.getFirstName())
console.log(amolG.getLastName())
console.log(amolG.getAge())