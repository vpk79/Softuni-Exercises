function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    


    while(command !== "Finish"){

        let movieName = command;
        let freePlaces = Number(input[index]);
        index++;
        
        let command2 = input[index];
        index++;

        let movieTickets = 0;

        for(let i = freePlaces; i > 0; i--){
            
            if(command2 === "End"){
                break;
            }

            let ticketType = command2;

            if(ticketType === "student"){
                studentTickets++;
            } else if (ticketType === "standard"){
                standardTickets++;
            } else if (ticketType === "kid"){
                kidsTickets++;
            }

            movieTickets++;
            if(i == 1){
                break;
            }
            command2 = input[index];
            index++; 
        }

        totalTickets += movieTickets;
        

        let hallFilness = movieTickets / freePlaces * 100;
        console.log(`${movieName} - ${hallFilness.toFixed(2)}% full.`);

        
        
       
        command = input[index];
        index++;
    }


    let studentTicketsPercent = studentTickets / totalTickets * 100;
    let standardTicketsPercent = standardTickets / totalTickets * 100;
    let kidsTicketsPercent = kidsTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);


}



// cinemaTickets(["The Matrix",
// "20",
// "student",
// "standard",
// "kid",
// "kid",
// "student",
// "student",
// "standard",
// "student",
// "End",
// "The Green Mile",
// "17",
// "student",
// "standard",
// "standard",
// "student",
// "standard",
// "student",
// "End",
// "Amadeus",
// "3",
// "standard",
// "standard",
// "standard",
// "Finish"])

cinemaTickets(["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"])