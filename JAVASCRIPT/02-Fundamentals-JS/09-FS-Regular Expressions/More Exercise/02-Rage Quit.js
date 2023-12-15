function solve(input) {

    let pattern = /(?<string>\D+)(?<number>\d+)/gi

    let line;
    let finalString = "";
    let bufferArray = [];

    while ((line = pattern.exec(input)) !== null) {

        let repeatNumber = Number(line.groups.number)
        let repeatedString = line.groups.string.toUpperCase().repeat(repeatNumber);
        finalString += repeatedString;
        if(line.groups.number > 0){
            bufferArray.push(line.groups.string.toUpperCase().split(""));
        }
    }

    bufferArray = bufferArray.flat()

    let charArray = [];
    let length = bufferArray.length;
    for (let i = 0; i < length; i++) {
        let char = bufferArray[i];
        if (!charArray.includes(char)) {
            charArray.push(char);
        }
    }
    let uniqueSymbols = charArray.length;

    console.log(`Unique symbols used: ${uniqueSymbols}`);
    console.log(finalString);
}



// solve('a3')
// solve('aSd2&5s@1')
solve("e-!btI17z=E:DMJ19U1Tvg VQ>11P\"qCmo.-0YHYu~o%/%b.}a[=d15fz^\"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p\"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p\"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15")