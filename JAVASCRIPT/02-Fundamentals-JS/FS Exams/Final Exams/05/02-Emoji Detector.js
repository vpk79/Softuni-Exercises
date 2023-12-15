function solve(input){
    let string = input[0];
    let emojiPattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,}\1)/g
    let wordPattern = /[A-Z][a-z]+/
    let digits = /\d+/g

    let coolness = string.match(digits).join("").split("").map(Number).reduce((a,x) => a * x, 1);

    console.log(`Cool threshold: ${coolness}`);

    let emojiList = [];
    let emojis;
    while((emojis = emojiPattern.exec(string)) !== null){
        emojiList.push(emojis[0])
    }

    let emojiCount = emojiList.length;
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    for(let emoji of emojiList){
        let sum = 0;
        let word = emoji.match(wordPattern)[0];

        for (let char of word) {
            sum += char.charCodeAt(0)
        }

        if (sum >= coolness){
            console.log(emoji);
        }
    }

}




solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

// solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable ***English**."])