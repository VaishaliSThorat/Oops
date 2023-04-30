// call bind apply

// let info = {
//     firstName:"vaishali",
//     lastName:"thorat",
//     age: 30,
//     rollNo: 12,
//     skills: ["JS", "TS", "Cypress", "Ajax"],
//     display: function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// info.display()

// let info2 = {
//     firstName: "varsha",
//     lastName: "raut",
//     age:29,
//     rollNo: 11,
//     skills: ["js", "java", "python"]
// }

// let brdm = info.display

// // let brdm = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// brdm()

// call, bind, apply

// bind()

// let brdm2 = brdm.bind(info2)
// let brdm2 = function(){
//     console.log(info2.firstName + info2.lastName)
// }
// brdm2()

// program 2 

let vishal = {
    firstName: "vishal",
    lastName: "thorat"
}

let dnyanesh = {
    firstName: "dnyanesh",
    lastName: "thorat"
}

let kajal = {
    firstName: "kajal",
    lastName: "thorat"
}

let displayName = function(){
    console.log(this.firstName + this.lastName)
}
displayName()

// let s1 = displayName.bind(vishal)
// displayName.bind(vishal)()
// displayName.bind(dnyanesh)()
// displayName.bind(kajal)()

// s1 = function(){
//     console.log(vishal.firstName + vishal.lastName)
// }
// s1()

// // call

// displayName.call(vishal)
// displayName.call(dnyanesh)
// displayName.call(kajal)

let displayName2 = function(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}
displayName2()

displayName2.call(vishal,"Gm")
displayName2.call(dnyanesh,"Ga")
displayName2.call(kajal,"Ge")

// apply()

displayName2.apply(vishal,["gm"])


let firstName = "abhisha"
let lastName = "dani"

// My firstName is abhisha and lastName is dani

console.log("My firstName is "+firstName+" My lastName is "+lastName)

console.log(`My firstName is ${firstName} My lastName is ${lastName}`)

console.log(`${1+4}`)