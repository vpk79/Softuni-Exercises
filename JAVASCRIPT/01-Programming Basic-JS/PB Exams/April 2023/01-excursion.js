function excursion(input){
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museiumTickets = Number(input[3]);

    let sum = people * (nights * 20 + transportCards * 1.60 + museiumTickets * 6)

    sum += sum * 0.25;

    console.log(sum.toFixed(2));

}



excursion([
"20",
"14",
"30",
"6"])
