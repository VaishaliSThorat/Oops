class GrandFather{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather{
    constructor(fn, ln, ffn){
        super(fn, ln)
        this.ffn = ffn
    }
    displayFName(){
        console.log(this.ffn + this.lastName)
    }
}


class Son extends Father{
    constructor(fn, ln, ffn, sfn){
        super(fn, ln, ffn)
        this.sname = sfn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }

}

let Karan = new Son ("Mohan", "Joshi", "Mahesh", "Karan")
Karan.displayFName()
Karan.displayName()
Karan.displaySName()
console.log(Karan.ffn)
console.log(Karan.firstName)
console.log(Karan.lastName)
console.log(Karan.sname)

let Mahesh = new Father("Mohan", "Joshi", "Mahesh")
Mahesh.displayFName()
Mahesh.displayName()
console.log(Mahesh.ffn)
console.log(Mahesh.firstName)
console.log(Mahesh.lastName)

let Mohan = new GrandFather("Mohan", "Joshi")
console.log(Mohan.firstName)
console.log(Mohan.lastName)
Mohan.displayName()

class Mother {
    constructor(fn, ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayMName(){
        console.log(this.firstName + this .lastName)
    }
}

class SonG extends Mother {
    constructor(fn, ln, sfn){
        super(fn, ln)
        this.sfName = sfn
    }
    displaySFName(){
        console.log(this.sfName + this.lastName)
    }
}

class Daughter extends Mother{
    constructor(fn, ln, dfn){
    super(fn, ln)
    this.dfName = dfn
    }
    displayDName(){
        console.log(this.dfName + this.lastName)
    }
}

let Ketki = new Mother("Ketki", "Kamad")
let Shravya = new Daughter("Ketki", "Kamad", "Shravya")
let Gourav = new SonG("Ketki", "Kamad", "Gourav")

Ketki.displayMName()
Shravya.displayDName()
Gourav.displaySFName()