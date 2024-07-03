//////this is a user

var username = "Zahra"
var age = 22
var email = "zahra@zellazi.tn"

 function grow(){
    age++
    return "happy birthday you are now " +age
 }

 function changeName(newName){
    username = newName
    return "welcome " +newName
 }
////////class used multiple times (encapsulation/abstraction)
///////an object only exposes the selected informations (encap)
///////hides the details to reduce complexity (abs)
 class User {
    constructor(username,age,email){
        this.username=username
        this.age=age
        this.email=email
    }
    grow(){
        age++
        return "happy birthday you are now " +age
     }
     changeName(newName){
        username = newName
        return "welcome " +newName
     }
 }

 ///////////ABSTRACTION
////old !! not to use 
//// the abstraction hides the complexity 

function User(username,age,email){
    this.username=username
    this.age=age
    this.email=email
}
User.prototype.grow = () =>{
    age++
    return "happy birthday you are now " +age
 }
User.prototype.changeName = (newName) => {
    username = newName
    return "welcome " +newName
 }

 /////////// INHERITANCE
 ///////ability to inherit attributs from other entities 

 class Student extends User {
    constructor(username,age,email,classOfStudent) {
        super ()
        this.classOfStudent=classOfStudent
    }
    study(){
        return "iam working"
    }
 }

 //////////Polymorphism
////////entities can have more than one form 

class User {
    constructor(username, age, email) {
        this.username = username;
        this.age = age;
        this.email = email;
    }

    grow() {
        this.age++;
        return "happy birthday you are now " + this.age;
    }

    changeName(newName) {
        this.username = newName;
        return "welcome " + newName;
    }

    // Polymorphic method
    describe() {
        return `${this.username} is ${this.age} years old.`;
    }
}

class Student extends User {
    constructor(username, age, email, classOfStudent) {
        super(username, age, email);
        this.classOfStudent = classOfStudent;
    }

    study() {
        return "I am working";
    }

    // Overriding the describe method
    describe() {
        return `${this.username} is ${this.age} years old and studies in class ${this.classOfStudent}.`;
    }
}

// Polymorphism in action
let user = new User("Zahra", 22, "zahra@zellazi.tn");
console.log(user.describe()); // Output: Zahra is 22 years old.

let student = new Student("Ali", 20, "ali@school.com", "10th Grade");
console.log(student.describe()); // Output: Ali is 20 years old and studies in class 10th Grade.
