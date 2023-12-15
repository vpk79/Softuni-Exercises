function solve(input){

    let part1Pattern = /(?<symbol>[#$%*&]{1})(?<capitals>[A-Z]+)\k<symbol>/
    let part2Pattern = /(?<letter>\d+):(?<leng>\d{2})/g

    let lines = input[0].split("|");

    let wordsList = lines[2].split(" ");

    let capitalLetters = lines[0].match(part1Pattern).groups.capitals.split("");

    let wordLengths = {};
    let part2Info;
    while((part2Info = part2Pattern.exec(lines[1])) !== null){
        
        let letter = String.fromCharCode(part2Info.groups.letter)
        if(capitalLetters.includes(letter)){
            wordLengths[letter] = Number(part2Info.groups.leng) + 1;
        }
        
    }

    for(let symbol of capitalLetters){

        for(let i = 0; i < wordsList.length; i++){
            let word = wordsList[i];
            let length = wordLengths[symbol];
            if(word[0] === symbol && word.length === length){
                console.log(word);
            }
        }
    }
}



// solve(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])

solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23: 11{79:05}tak{65:11ar}!77: !23--)77:05ACCSS76:05ad | Remedy Por Ostream: Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])