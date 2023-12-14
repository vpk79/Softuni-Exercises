function courier(input){
    let packageKilos = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);
    let surplus = 0;
    let price = 0;


    switch(serviceType){
        case "standard":
            if(packageKilos < 1){
                price = 0.03;
            } else if(packageKilos < 10){
                price = 0.05;
            } else if (packageKilos < 40){
                price = 0.10;
            } else if (packageKilos < 90){
                price = 0.15;
            } else if ( packageKilos < 150){
                price = 0.20;
            }

            break;

        case "express":
            if(packageKilos < 1){
                price = 0.03;
                surplus = price * 0.80;
            } else if(packageKilos < 10){
                price = 0.05;
                surplus = price * 0.40;
            } else if (packageKilos < 40){
                price = 0.10;
                surplus = price * 0.05;
            } else if (packageKilos < 90){
                price = 0.15
               surplus = price * 0.02;
            } else if ( packageKilos < 150){
                price = 0.20;
                surplus = price * 0.01;
            }

            break;

    }
     
    let sum = price * distanceKm + surplus * distanceKm * packageKilos;

    console.log(`The delivery of your shipment with weight of ${packageKilos.toFixed(3)} kg. would cost ${sum.toFixed(2)} lv.`);
}



courier(["87",
"express",
"130"])

