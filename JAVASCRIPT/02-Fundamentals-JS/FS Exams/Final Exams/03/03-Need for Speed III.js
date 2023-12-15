function needForSpeed(input){
    const cycles = Number(input.shift());
    const cars = [];

    for(let i = 0; i < cycles; i++){
        let[car, millage, fuel] = input.shift().split('|');
        cars.push({
            car, 
            millage: Number(millage),
            fuel: Number(fuel)
        })
    }

    for(let entry of input){
        if(entry === 'Stop') break;
        if(entry.includes("Drive")) drive(entry);
        if(entry.includes("Refuel")) refuel(entry);
        if(entry.includes("Revert")) revert(entry);
    }

    function drive(entry){
       let[command, model, distance, fuel] = entry.split(' : ');
        distance = Number(distance);
        fuel = Number(fuel);
        for(let token of cars){
            if(token.car === model){
                if(token.fuel < fuel) {
                    console.log("Not enough fuel to make that ride");
                    break;
                }

                token.millage += distance;
                token.fuel -= fuel;
                console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if(token.millage >= 100000){
                    cars.splice(cars.indexOf(token),1);
                    console.log(`Time to sell the ${model}!`);
                }
            }
        }
    }

    function refuel(entry){
       let[command, model, fuel] = entry.split(" : ");
        fuel = Number(fuel);
        let refill;
        for(let token of cars) {
            if(token.car === model){
               refill = Math.min((75-token.fuel), fuel)
               token.fuel += refill;
                console.log(`${model} refueled with ${refill} liters`);
            }
        }
    }

    function revert(entry){
        let[command, model, kilometers] = entry.split(' : ');
        kilometers = Number(kilometers);

        for(let token of cars){
            if(token.car === model){
                token.millage -= kilometers;
                if(token.millage < 10000) {
                    token.millage = 10000;
                    break;
                }
                console.log(`${model} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    for(let token of cars){
        console.log(`${token.car} -> Mileage: ${token.millage} kms, Fuel in the tank: ${token.fuel} lt.`);
    }
    
}




needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])