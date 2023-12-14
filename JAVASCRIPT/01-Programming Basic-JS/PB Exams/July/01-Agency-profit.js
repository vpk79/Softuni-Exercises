function agencyProfi(input){
    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let childTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let childTicketPrice = adultTicketPrice * 0.30;
    let taxServices = Number(input[4]);

    let adultTicketsSum = (adultTicketPrice + taxServices) * adultTickets;
    let childTicketsSum = (childTicketPrice + taxServices) * childTickets;

    let agencyProfit = (adultTicketsSum + childTicketsSum) * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${agencyProfit.toFixed(2)} lv.`);


}




agencyProfi(["Ryanair",
"60",
"23",
"158.96",
"39.12"])	

