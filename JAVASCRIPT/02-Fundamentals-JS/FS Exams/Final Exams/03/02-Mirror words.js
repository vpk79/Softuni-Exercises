function mirrorWords(input){
    const string = input[0];
    const pattern = /([@]|[#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g

    const matches = [...string.matchAll(pattern)];
    if(matches.length === 0){
        console.log("No word pairs found!");
    } else {
        console.log(`${matches.length} word pairs found!`);
    }
    const words = [];

    for(let token of matches){
        const word1 = token.groups.word1;
        const word2 = token.groups.word2.split('').reverse().join('');
        if(word1 === word2) words.push(word1);
    }
    
    let result = '';
    if(words.length === 0){
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        for(let word of words){
            let reversed = word.split('').reverse().join('');
            result += word + ' <=> ' + reversed + ', '
        }
    }

    console.log(result.slice(0,-2));

}



mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)