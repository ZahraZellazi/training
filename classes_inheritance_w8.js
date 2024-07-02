class Person {
    constructor(name,lastname,age,hobby) {
        this.name=name
        this.lastname=lastname
        this.age=age
        this.hobby=hobby
    }
    grow(){
        this.age++
        return "happy birthday"
    }
    changeName(newName){
        this.name = newName
        return"your new name is :" + this.name
    }
}

class Worker extends Person {
    constructor(name,lastname,age,hobby,salary){
    super(name,lastname,age,hobby)
    this.salary= salary
    }
    work(){
    return "iam happy because iam getting " +this.salary
    }
}
