function treasureHunt(input){
    let index = 0;
    let treasureChest = input[index].split("|");
    index++;

    let sentence = input[index];
    index++;

    while(sentence !== "Yohoho!"){

        if(sentence.includes("Loot")){
            loot(sentence);
        } else if (sentence.includes("Drop")){
            drop(sentence);
        } else if (sentence.includes("Steal")){
            steal(sentence);
        }

        sentence = input[index];
        index++;
    }


    if(treasureChest.length == 0){
        console.log("Failed treasure hunt.");
    } else{
        let sum = 0;
        for(let i = 0; i < treasureChest.length; i++){
            sum += treasureChest[i].length;
        }
        let avgSum = sum / treasureChest.length;
        console.log(`Average treasure gain: ${avgSum.toFixed(2)} pirate credits.`);
    }


    function loot(string){
        let arrOfLoot = string.split(" ");

        for(let i = 1; i < arrOfLoot.length; i++){
            let element = arrOfLoot[i];
            if(!treasureChest.includes(element)){
                treasureChest.unshift(element)
            }
        }
    }


    function drop(string){
        let arrOfDrop = string.split(" ");
        let [command, index] = arrOfDrop;
        let item = treasureChest.splice(Number(index), 1);

        if(item.length > 0){
            treasureChest.push(item[0]);
        }
    }

    function steal(string){
        let arrOfSteal = string.split(" ");
        let [command, count] = arrOfSteal;
        count = Number(count);
        if(count > treasureChest.length){
            count = treasureChest.length;
        }
        let stolenItems = [];
        for(let i = 0; i < count; i++){
            let item = treasureChest.pop()
            stolenItems.unshift(item);
        }
        console.log(stolenItems.join(", "));
    }
}



// treasureHunt((
// ["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"]))

treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]))