function solve(firstname, lastname, age, email){
    
    let personArr = [];


    class Person {

        constructor(firstname, lastname, age, email) {
            this.firstName = firstname;
            this.lastName = lastname;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

        }

    }
    personArr.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    personArr.push(new Person('SoftUni'));
    personArr.push(new Person('Stephan', 'Johnson', 25));
    personArr.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return personArr;
}



// console.log(solve('Anna', 'Simpson', '22', 'anna@yahoo.com'))
console.log(solve());