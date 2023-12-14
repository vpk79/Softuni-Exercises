function weddingSeats(input){
    let lastSector = input[0];
    let firstSectorRows = Number(input[1]);
    let oddRowSeats = Number(input[2]);
    let counter = 0;
   
    

    let lastSectorChar = lastSector.charCodeAt(0);

    for(let i = 65; i <= lastSectorChar; i++){
        for(let j = 1; j <= firstSectorRows; j++){
            let seats = 96 + oddRowSeats;

            if(j % 2 == 0){
                seats +=2;
            }
            for(let k = 97; k <= seats; k++){
                let charSeats = String.fromCharCode(k);
                let charSector = String.fromCharCode(i);
                console.log(`${charSector}${j}${charSeats}`);
                counter++;
            }
            
        }
       firstSectorRows++;
    }
    console.log(counter);
}


weddingSeats(["C", "4","2"])