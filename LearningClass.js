
class Emaployee {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    save() {
       console.log(`Saving ${this.firstName} ${this.lastName}`);
       
    }

    delete() {
        console.log(`Deleting ${this.firstName} ${this.lastName}`);
    }

    getFirstName() {
        return this.firstName;
    }
}


let emp1 = new Emaployee("Deepak", "Jaiswal");
let emp2 = new Emaployee("Rahul", "Jaiswal");

emp1.save();

let fn = emp2.getFirstName();

console.log(fn);

emp2.save();





