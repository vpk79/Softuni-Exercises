function letters(input) {

    let char1 = input[0];
    let char2 = input[1];
    let char3 = input[2];

    let charBegin = char1.charCodeAt(0);
    let charEnd = char2.charCodeAt(0);
    let charSkip = char3.charCodeAt(0);
    let result = ""
    let letter1;
    let letter2;
    let letter3;
    let counter = 0;

    for (let i = charBegin; i <= charEnd; i++) {

        if (i === charSkip) {
            continue;
        }

        for (let j = charBegin; j <= charEnd; j++) {
            if (j === charSkip) {
                continue;
            }

            for (let k = charBegin; k <= charEnd; k++) {
                if (k === charSkip) {
                    continue;
                }

                letter1 = String.fromCharCode(i);
                letter2 = String.fromCharCode(j);
                letter3 = String.fromCharCode(k);

                result += `${letter1}${letter2}${letter3} `
                counter++;

            }
        }

    }

    console.log(result + counter);
}

letters(["f", "k", "h"])