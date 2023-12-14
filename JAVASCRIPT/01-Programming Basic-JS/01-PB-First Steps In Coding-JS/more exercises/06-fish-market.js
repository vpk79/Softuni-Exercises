function fishMarket(input){
    let skumriqPricePerKg = Number(input[0]);
    let cacaPricePerKg = Number(input[1]);
    let palamudKg = Number(input[2]) * (skumriqPricePerKg + (skumriqPricePerKg * 0.6));
    let safridKg = Number(input[3]) * (cacaPricePerKg + (cacaPricePerKg * 0.8));
    let midiKg = Number(input[4]) * 7.50;


    let finalPrice = palamudKg + safridKg + midiKg;

    console.log(finalPrice.toFixed(2));



}



fishMarket(["6.90", "4.20", "1.5", "2.5", "1"]);
  