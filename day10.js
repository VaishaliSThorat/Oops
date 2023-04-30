// program 1
// class Calculator {
//     addition(x, y) {
//         console.log(x + y)
//     }
//     addition(x, y, z) {
//         console.log(x + y + z)
//     }
//     addition(x, y, z, a){
//         console.log(x + y + z + a)
//     }
// }

// let a = new Calculator()
// a.addition(12, 3, 4, 5)
// a.addition(12,3,4)

// program 2

class Calculator2{
    addition(x, y, z, a){
        if(x != undefined, y != undefined, z != undefined, a != undefined){
    console.log(x+y+z+a)
}
else if(x != undefined, y != undefined, z != undefined){
    console.log(x+y+z)
}
else if(x != undefined, y != undefined){
    console.log(x+y)
}
    }
}

let aa = new Calculator2()
aa.addition(12,33)
aa.addition(12,33,44)
aa.addition(12,3,4,55)