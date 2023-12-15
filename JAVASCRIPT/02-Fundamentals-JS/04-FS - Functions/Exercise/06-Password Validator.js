function passwordValidation(input) {

    let digitCounter = 0;
    let isValid = false;
    if (input.length < 6 || input.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }
    for (let i = 0; i < input.length; i++) {
        let char = input[i].charCodeAt(0);

        if (char > 47 && char < 58) {
           digitCounter++;
        }
        if ((char > 47 && char < 58) || (char > 64 && char < 91) || (char > 96 && char < 123)) {
            isValid = true;
            continue;
        } else {
            console.log("Password must consist only of letters and digits");
            isValid = false;
            break;
        }
    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
    } else if(digitCounter >= 2 && isValid == true) {
        console.log("Password is valid");
    }
}



// passwordValidation('logIn')
// passwordValidation('Pa$s$s')
passwordValidation('123 ')