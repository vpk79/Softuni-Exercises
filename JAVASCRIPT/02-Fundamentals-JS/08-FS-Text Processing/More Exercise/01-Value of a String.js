function solve(input){
    let stringArr = input[0].split("");
    let codeWord = input[1];

    let sum;
    if(codeWord === 'LOWERCASE'){
       sum = stringArr
            .filter(x => x.toLowerCase() === x && isNaN(x) && x.toLowerCase().charCodeAt(0) >= 97 && x.toLowerCase().charCodeAt(0) <= 122)
            .reduce((a,x) => a + x.charCodeAt(0), 0)
    }else {
        sum = stringArr
            .filter(x => x.toUpperCase() === x && isNaN(x) && x.toLowerCase().charCodeAt(0) >= 97 && x.toLowerCase().charCodeAt(0) <= 122)
            .reduce((a, x) => a + x.charCodeAt(0), 0)
    }
    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM','LOWERCASE'])
solve(['AC/DC','UPPERCASE'])