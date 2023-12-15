function solve(input){
    let adressBook = new Map();

    for(let line of input){
        let[name, adress] = line.split(":");
        adressBook.set(name, adress);
    }

    let sortedAdressBook = new Map([...adressBook].sort());

    for(let [name, adress] of sortedAdressBook){
        console.log(`${name} -> ${adress}`);
    }
}





solve([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])