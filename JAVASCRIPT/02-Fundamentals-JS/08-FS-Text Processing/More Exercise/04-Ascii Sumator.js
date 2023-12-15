function solve(input){
    let firstChar = input.shift().charCodeAt(0);
    let secondChar = input.shift().charCodeAt(0)

    let biggerChar = Math.max(firstChar, secondChar);
    let lesserChar = Math.min(firstChar, secondChar);

    let string = input.shift();
    let sum = 0;

    for(let char of string){
        let charNum = char.charCodeAt(0);
        if(charNum > lesserChar && charNum < biggerChar){
            sum += charNum;
        }
    }
    console.log(sum);
}



// solve([
//     '.',
//     '@',
//     'dsg12gr5653feee5'])

solve(['?',
    'E',
    '@ABCEF'])

// solve(['a',
//     '1',
//     'jfe392$#@j24ui9ne#@$'])