function solve(arrEntry, sortOpt){
    
    let tickets = [];

    class Ticket{

        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let entry of arrEntry){
        let[destination, price, status] = entry.split('|');
        price = Number(price);
        tickets.push(new Ticket(destination, price, status));
    }

    if(sortOpt === 'destination') {
       tickets.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if(sortOpt === 'price'){
        tickets.sort((a,b) => a.price - b.price);
    } else {
        tickets.sort((a,b) => a.status.localeCompare(b.status));
    }

    return tickets;

    // for(let obj of tickets){
    //     console.log(obj);
    // }
}





solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)
