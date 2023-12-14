function easterDecoration(input){
    let index = 0;
    let clientsCount = Number(input[index]);
    index++;
    let counter = 0;
    let product = input[index];
    index++;
    let clientSum = 0;
    let sumBuffer = 0;
    let productCount = 0;
    

    while(counter < clientsCount){

        if(product !== "Finish"){
            productCount++;

            switch(product){
                case "basket": clientSum += 1.50;
                break;
                case "wreath": clientSum += 3.80;
                break;
                case "chocolate bunny": clientSum += 7;
                break;
                
            }
        } else {
            if(productCount % 2 == 0){
                clientSum *= 0.80;
            }
            sumBuffer += clientSum;
            
            console.log(`You purchased ${productCount} items for ${clientSum.toFixed(2)} leva.`);
            clientSum = 0;
            productCount = 0;
            counter++;
        }

        product = input[index];
        index++;
    }

    let AvgSum = sumBuffer / clientsCount;
    console.log(`Average bill per client is: ${AvgSum.toFixed(2)} leva.`);
}




easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

