function pyramidOfKingDjoser(base, increment){

    let stones = 0;
    let marbles = 0;
    let counter = 1;
    let lazuli = 0;
    let gold = 0;
    let height = 0;
    let allStones = 0;
    let allMarbles = 0;
    let allLazuli = 0;

    for(let i = base; i >= 1; i -= 2){

        height++;

        if(i < 3){
            gold = i * i * increment;
            break;
        }

        if(counter == 5){
            lazuli = (i * 4 - 4) 
            allStones += (i * i - lazuli) * increment;
            lazuli *= increment;
            allLazuli += lazuli;
            counter = 1;
            continue;
        }

        
        marbles = (i * 4 - 4); 
        stones = (i * i - marbles);

        marbles *= increment;
        stones *= increment;

        allStones += stones;
        allMarbles += marbles;


        counter++;
       
    }
    console.log(`Stone required: ${Math.ceil(allStones)}`);
    console.log(`Marble required: ${Math.ceil(allMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(allLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${(Math.floor(height*increment))}`);
}


// pyramidOfKingDjoser(11, 1)
// pyramidOfKingDjoser(11, 0.75)
// pyramidOfKingDjoser(12, 1)
pyramidOfKingDjoser(23, 0.5)
