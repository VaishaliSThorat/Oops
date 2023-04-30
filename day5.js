// Without constructor // program 1

class GrandFather {
    firstName = "Kondaji"
    lastName = "Thorat"
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class father extends GrandFather {
    fFirstName = "Shivaji"
    displayFName(){
        console.log(this.fFirstName + this.lastName)
    }
}

class daughter extends father {
    dFirstName = "Vaishali"
    displayDName(){
        console.log(this.dFirstName + this.lastName)
    }
}

let Vaishali = new daughter()
console.log(Vaishali.dFirstName)
console.log(Vaishali.fFirstName)
console.log(Vaishali.firstName)
console.log(Vaishali.lastName)

Vaishali.displayDName()
Vaishali.displayFName()
Vaishali.displayGName()

// let Shivaji = new father()
// console.log(Shivaji.fFirstName)
// console.log(Shivaji.firstName)
// console.log(Shivaji.lastName)
// Shivaji.displayGName()
// Shivaji.displayFName()


// program 2 

class GrandFatherB {
    constructor(fn, ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

let Shamrao = new GrandFatherB("Shamrao", "Thorat")
Shamrao.displayGName()
console.log(Shamrao.firstName)
console.log(Shamrao.lastName)

class fatherB extends GrandFatherB {
    fBFirstName = "Kisan"
    displayFBName(){
        console.log(this.fBFirstName + this.lastName)
    }
}

let Kisan = new fatherB("Kisan", "Thorat")
console.log(Kisan.fBFirstName)
console.log(Kisan.lastName)
// console.log(Kisan.firstName)
Kisan.displayFBName()
// Kisan.displayGName()

class GrandFatherC {
    constructor(fn, ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayGCName(){
        console.log(this.firstName + this.lastName)
    }
}

let Dattatray = new GrandFatherC("Dattatray", "Lokhande")
Dattatray.displayGCName()
console.log(Dattatray.firstName)
console.log(Dattatray.lastName)

class FatherC extends GrandFatherC{
    constructor(fn, ln, fcfn){
        super(fn, ln)
        this.fcFirstName = fcfn
    }
    displayFCName(){
        console.log(this.fcFirstName + this.lastName)
    }

}
 let Ram = new FatherC("Dattatray", "Lokhande", "Ram")
 console.log(Ram.fcFirstName)
 console.log(Ram.firstName)
 console.log(Ram.lastName)

 Ram.displayFCName()
 Ram.displayGCName()
