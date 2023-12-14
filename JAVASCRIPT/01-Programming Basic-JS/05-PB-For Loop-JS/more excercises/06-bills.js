function bills(input){
    let months = Number(input[0]);
    let waterBill = 20;
    let internetBill = 15;
    let electricityBill = 0;

    for(let i = 1; i < months +1; i++){
        electricityBill += Number(input[i]);
    }

    waterBill *= months;
    internetBill *= months;

    
    let otherBills = (electricityBill + waterBill + internetBill) * 1.20;
    let avgBills = (electricityBill + waterBill + internetBill + otherBills) / months;
    

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${avgBills.toFixed(2)} lv`);


}


bills(["5","68.63","89.25","132.53","93.53","63.22"])