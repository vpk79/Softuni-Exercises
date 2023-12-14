function agencyProfit(input){
    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let childYicketsPrice = adultTicketPrice * 0.30;
    let serviceTax = Number(input[4]);

    let overall = (adultTickets * adultTicketPrice + childTickets * childYicketsPrice)+ (adultTickets+childTickets)*serviceTax;
    let sum = overall * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${sum.toFixed(2)} lv.`);


}


agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])
