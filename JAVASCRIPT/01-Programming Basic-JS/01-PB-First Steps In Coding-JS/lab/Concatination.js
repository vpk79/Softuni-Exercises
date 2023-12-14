function concatenateData(input){
    firstName = input[0];
    lastName = input[1];
    age = Number(input[2]);
    town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateData(["Maria", "Ivanova", "20", "Sofia"])
