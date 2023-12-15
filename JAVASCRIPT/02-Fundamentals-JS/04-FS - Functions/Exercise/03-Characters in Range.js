function charactersInRange(char1, char2) {

    let charCode1 = char1.charCodeAt(0);
    let charCode2 = char2.charCodeAt(0);

    let buffer = ''
    let string = ''
    if (charCode1 < charCode2) {
        string = charIncreasing(charCode1, charCode2);
    } else {
        string = charIncreasing(charCode2, charCode1);
    }


    function charIncreasing(a, b) {
        for (let i = a + 1; i < b; i++) {
            let char = String.fromCharCode(i);
            buffer += char + ' ';

        }
        return buffer;
    }

    console.log(string);
}

// charactersInRange('a','d')
// charactersInRange('#', ':')
charactersInRange('C', '#')