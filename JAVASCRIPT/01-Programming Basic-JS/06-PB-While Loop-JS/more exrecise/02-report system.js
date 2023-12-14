function reportSystem(input){
    let index = 0;
    let neededSum = Number(input[index]);
    index++;

    let sum = 0;
    let command = "";
    let productPrice = 0;
    let cardCounter = 0;
    let cashCounter = 0;
    let transactionCounter = 0;
    let cashSum = 0;
    let cardSum = 0;

    while(neededSum > sum){
        command = input[index];

        if(command === "End"){
            break;
        }
        transactionCounter++;

        productPrice = Number(input[index]);

        if(transactionCounter % 2 !== 0){
            if (productPrice > 100){
                console.log("Error in transaction!");
                index++;
                continue;
            } else {
                console.log("Product sold!");
                cashSum += productPrice;
                cashCounter++;
            }
        } else {
            if (productPrice < 10){
                console.log("Error in transaction!");
                index++;
                continue;
            }  else {
                console.log("Product sold!");
                cardSum += productPrice;
                cardCounter++;
            }
        }

        sum += productPrice;
        index++;
        

    }

    if(command === "End"){
        console.log("Failed to collect required money for charity.");
    } else{
        let avgCash = cashSum / cashCounter;
        let avgCard = cardSum / cardCounter;
        console.log(`Average CS: ${avgCash.toFixed(2)}`);
        console.log(`Average CC: ${avgCard.toFixed(2)}`);
    }

}





reportSystem(["500","120","8","63","256","78","317"])
// reportSystem (["600","86","150","98","227","End"])