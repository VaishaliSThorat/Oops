// class

// user defined data type

// class ---- object
// class---- 4-- Inheritance, polymorphism, abstraction, encapsulation

// properties - accName, accNo, Bal, lastFiveT
// methods - deposit(), withDrawl(), displayLastFiveT(), totalDeposit(), totalWithdraw()

class Bank {
    constructor(accName, accNo, bal){
        this.accName = accName
        this.accNo = accNo
        this.bal = bal
        this.transaction = [bal]
    }

deposit(amount){
    this.bal = this.bal + amount
    this.transaction.push(amount)
    return this.bal
}

withdrawl(amount){
    if(this.bal >= amount){
        this.bal = this.bal - amount
        this.transaction.push(-amount)
        return this.bal
    }
    else{
        console.log('Insufficient balance')
    }
}

totalDeposit(){
    return this.transaction.filter(function(el){
        return el > 0
    })
    .reduce(function(acc,el){
        return acc + el
    },0)
}

totalWithdrawl(){
    return this.transaction.filter(function(el){
        return el < 0
    })
    .reduce(function(acc, el){
        return acc + el
    },0)
}

lastFiveTransaction(){
    return this.transaction.slice(-5)
}

}

let Vaishali = new Bank("Vaishali", 9, 2000)
console.log(Vaishali.withdrawl(500))
console.log(Vaishali.deposit(200))
console.log(Vaishali.withdrawl(700))
console.log(Vaishali.deposit(1000))
console.log(Vaishali.withdrawl(500))
console.log(Vaishali.lastFiveTransaction())
console.log(Vaishali.totalDeposit())

// tricky ---

let firstName = "Vaishali"
let lastName = "Thorat"

console.log("My firstname is "+firstName+" lastname is "+lastName)
console.log('My firstName is ${firstName} and my lastname is ${lastName}')
console.log('${firstName}')
console.log('${Vaishali.totalDeposit()}')