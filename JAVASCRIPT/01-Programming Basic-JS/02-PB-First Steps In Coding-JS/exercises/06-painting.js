function rumen(input){
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let dissolveQuantity = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = nylonQuantity * 1.50;
    let paintPrice = paintQuantity * 14.50;
    let dissolvePrice = dissolveQuantity * 5;

    let finalNylonPrice = (nylonQuantity + 2) * 1.50;
    let finalPaintPrice = (paintQuantity + ((paintQuantity)*(10/100))) * 14.50;
    let materialSum = (finalNylonPrice + finalPaintPrice + dissolvePrice + 0.40);
    let masterSum = (materialSum * (30/100)) * hours;
    let finalSum = materialSum + masterSum;

    console.log(finalSum);
}

rumen(["10", "11", "4", "8"]);