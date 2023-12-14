function pool(input){
    let peopleCount = Number(input[0]);
    let entryTax = Number(input[1]);
    let loungePrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let entrySum = peopleCount * entryTax;
    let umbrellaCount = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let loungeCount = Math.ceil(peopleCount * (75 / 100)) * loungePrice;

    let expenses = entrySum + umbrellaCount + loungeCount;

    console.log(expenses.toFixed(2) + " lv.");

}



pool(["21","5.50","4.40","6.20"])
