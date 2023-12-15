function solve(input){
    let messagesCount = Number(input.shift())
    let encryptKey = /[SsTtAaRr]/g
    let pattern = /@(?<planet>[A-Z][a-z]+)[^@!:>-]*:(?<population>\d+)[^@!:>-]*!(?<attack>[AD])![^@!:>-]*->(?<soldiers>\d+)/

    let attackedPlanets = [];
    let destroyedPlanets = [];
    

    for(let i = 0; i < messagesCount; i++){
        let line = input[i];
        let keyCount = 0;
        let newString = "";
       
        if(encryptKey.test(line)){
            keyCount = line.match(encryptKey).length;
        }

        for(let char of line){
            let newChar = String.fromCharCode(char.charCodeAt(0) - keyCount);
            newString += newChar;
           
        }

        if(pattern.test(newString)){
            let information = newString.match(pattern);
            if(information.groups.attack === 'A'){
                attackedPlanets.push(information.groups.planet)
            } else{
                destroyedPlanets.push(information.groups.planet)
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort().forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort().forEach(x => console.log(`-> ${x}`));
}




solve(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
)

solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)