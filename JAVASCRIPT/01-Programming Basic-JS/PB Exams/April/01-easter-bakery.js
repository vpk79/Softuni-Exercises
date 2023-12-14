function easterBakery(input){
    let flourPrice = Number(input[0]);
    let flourKilos = Number(input[1]);
    let sugarKilos = Number(input[2]);
    let eggBox = Number(input[3]);
    let yeastBox = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggPrice = flourPrice * 1.10;
    let yeastPrice = sugarPrice * 0.20;


    let flourSum = flourKilos * flourPrice;
    let sugarSum = sugarKilos * sugarPrice;
    let eggSum = eggBox * eggPrice;
    let yeastSum = yeastBox * yeastPrice;

    let expenses = flourSum + sugarSum + eggSum + yeastSum;

    console.log(expenses.toFixed(2));
}


easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])
