function login(input) {
    let pass = input[0];
    let password = "";
    let counter = 0;
    for (let i = pass.length - 1; i >= 0; i--) {
        password += pass[i]
    }

    for (let i = 1; i < input.length; i++) {
        let word = input[i];

        if (word === password) {
            console.log(`User ${pass} logged in.`);
            break;
        } else {

            counter++;
            if (counter == 4) {
                console.log(`User ${pass} blocked!`);
                break;
            }

            console.log("Incorrect password. Try again.");
        }



    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA'])

console.log("---------------------------");
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])