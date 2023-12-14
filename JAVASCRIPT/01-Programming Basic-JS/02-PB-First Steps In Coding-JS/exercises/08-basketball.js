function jessy(input){
    let taxForYear = Number(input[0]);
    let basketSnickers = taxForYear - (taxForYear *  0.4);
    let basketEquip = basketSnickers - (basketSnickers * 0.2);
    let basketBall = basketEquip * (1 / 4);
    let accessoars = basketBall * (1 / 5);

    let finalPrice = taxForYear + basketSnickers + basketEquip + basketBall + accessoars;

    console.log(finalPrice);


}


jessy(["550"]);