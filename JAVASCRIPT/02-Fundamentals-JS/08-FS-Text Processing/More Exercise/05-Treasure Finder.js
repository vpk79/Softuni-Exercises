function solve(input) {
    let keys = input.shift().split(" ").map(Number);

    let string = input.shift().split("");
    let newArr = [];

    while (string !== "find") {

        let keysCopy = keys.slice();
        let stringLength = string.length;

        for (let i = 0; i < stringLength; i++) {
            if (keysCopy.length == 0) keysCopy = keys.slice();
            let num = keysCopy.shift();
            let char = string.shift();
            let newChar = String.fromCharCode(char.charCodeAt(0) - num);

            newArr.push(newChar)
        }

        let treasure = newArr.slice(newArr.indexOf('&') + 1, newArr.lastIndexOf('&')).join("");
        let coordinates = newArr.slice(newArr.indexOf('<') + 1, newArr.indexOf('>')).join("");

        console.log(`Found ${treasure} at ${coordinates}`);
        newArr = [];
        string = input.shift()
        if (string !== 'find') string = string.split("");
    }
}




solve([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])

solve(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
    "find"])