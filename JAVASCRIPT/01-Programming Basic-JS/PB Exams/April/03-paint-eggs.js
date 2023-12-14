function paintEggs(input){
    let eggSize = input[0];
    let eggColor = input[1];
    let bacthCount = input[2];
    let batchPrice = 0;

    switch(eggSize){

        case "Large":
            if(eggColor === "Red"){
                batchPrice = 16;
            } else if (eggColor === "Green"){
                batchPrice = 12;
            } else {
                batchPrice = 9;
            }
            break;

        case "Medium":
            if(eggColor === "Red"){
                batchPrice = 13;
            } else if (eggColor === "Green"){
                batchPrice = 9;
            } else {
                batchPrice = 7;
            }
            break;

        case "Small":
            if(eggColor === "Red"){
                batchPrice = 9;
            } else if (eggColor === "Green"){
                batchPrice = 8;
            } else {
                batchPrice = 5;
            }
            break;

    }

    let income = (bacthCount * batchPrice) * 0.65;

    console.log(`${income.toFixed(2)} leva.`);
}







paintEggs(["Small",
"Yellow",
"3"])

