function triplesLatinLetters(num) {

    let letter1 = "";
    let letter2 = "";
    let letter3 = "";
    let num1 = Number(num)

    for (let i = 0; i < num1; i++) {
        letter1 = String.fromCharCode(97 + i)
        for (let j = 0; j < num1; j++) {
            letter2 = String.fromCharCode(97 + j)
            for (let k = 0; k < num1; k++) {
                letter3 = String.fromCharCode(97 + k)

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }

    }

}


triplesLatinLetters('2')