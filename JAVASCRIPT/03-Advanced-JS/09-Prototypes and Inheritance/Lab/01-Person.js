function Person(firstName, lastName) {

    const result = {
        firstName,
        lastName
    };

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get(){
            return result.firstName + ' ' + result.lastName
        },

        set(value){
            [result.firstName, result.lastName] = value.split(' ');
        }
    });


    return result;

}

// class Person{

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }

//     get fullName(){
//         return this.firstName + ' ' + this.lastName
//     }

//     set fullName(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// }


let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla