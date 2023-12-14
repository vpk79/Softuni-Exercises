function santaDeers(input){
    let days = Number(input[0]);
    let food = Number(input[1]);
    let deer1Food = Number(input[2]);
    let deer2Food = Number(input[3]);
    let deetr3Food = Number(input[4]);

    let eatFood = days * deer1Food + days * deer2Food + days * deetr3Food;

    
    if(food >= eatFood){
        let foodLeft = Math.floor(food- eatFood)
        console.log(`${foodLeft} kilos of food left.`);
    } else {

        let foodNeeded = Math.ceil(eatFood - food)
            console.log(`${foodNeeded} more kilos of food are needed.`);
        }

    

}


santaDeers(["5",
"10",
"2.1",
"0.8",
"11"])

