function backToPast(input){
    let legacyMoney = Number(input[0]);
    let yearToDie = Number(input[1]);
    let ageIvancho = 18;
    let startingYear = 1800;

    for (let i = startingYear; i <= yearToDie; i++){
        if(i % 2 === 0){
            legacyMoney -= 12000;
        } else{
            legacyMoney -= 12000 + (50*ageIvancho)
        }

        ageIvancho++;
    }

    if(legacyMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${legacyMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(legacyMoney).toFixed(2)} dollars to survive.`);
    }


}



backToPast(["100000.15", "1808"])
backToPast(["50000", "1802"])
    