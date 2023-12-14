function puppy(input){
    let index = 0;
    let dogfood = Math.floor(Number(input[index]) * 1000);
    index++;

    let command = input[index];
    index++;

    let eatenFood = 0;

    while(command !== "Adopted"){
        eatenFood = Number(command);

        dogfood -= eatenFood;
        


        command = input[index];
        index++;
    }

    if(dogfood >= 0){
        console.log(`Food is enough! Leftovers: ${dogfood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(dogfood)} grams more.`);
    }
    
}




puppy(["3",
"1000",
"1000",
"1000",
"Adopted"])



