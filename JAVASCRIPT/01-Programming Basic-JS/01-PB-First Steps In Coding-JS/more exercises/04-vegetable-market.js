function gardener(input){
    let kgVegetablesPrice = Number(input[0]);
    let kgFruitsPrice = Number(input[1]);
    let vegetablesKilos = Number(input[2]);
    let fruitsKilos = Number(input[3]);

    let income = (kgVegetablesPrice * vegetablesKilos + kgFruitsPrice * fruitsKilos) / 1.94;

    console.log(income.toFixed(2));

}


gardener(["0.194", "19.4", "10", "10"]);

