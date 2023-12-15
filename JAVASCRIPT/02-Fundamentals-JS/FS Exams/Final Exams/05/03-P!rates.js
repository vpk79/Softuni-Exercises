function solve(input) {

    let locations = [];
    let isFound = false;
    let line = input.shift();

    while (line !== 'Sail') {

        let [city, population, gold] = line.split("||").map(x => isNaN(x) ? x : Number(x));

        if (locations.length == 0) {
            locations.push({
                town: city,
                population: population,
                gold: gold,
            })
            line = input.shift();
            continue;
        }

        for (let obj of locations) {

            if (obj['town'] === city) {
                obj['population'] += population;
                obj['gold'] += gold;
                isFound = true;
            }
        }

        if (isFound) {
            isFound = false;
            line = input.shift();
            continue;
        }

        locations.push({
            town: city,
            population: population,
            gold: gold,
        })

        line = input.shift();
    }

    line = input.shift();

    while (line !== 'End') {
        if (line.includes('Plunder')) {
            plunder(line);
        }

        if (line.includes('Prosper')) {
            prosper(line);
        }

        line = input.shift();
    }

    function plunder(string) {
        let [command, city, killed, plunder] = string.split("=>").map(x => isNaN(x) ? x : Number(x));

        console.log(`${city} plundered! ${plunder} gold stolen, ${killed} citizens killed.`);

        for (let obj of locations) {

            if (obj['town'] == city) {
                obj['population'] -= killed;
                obj['gold'] -= plunder;
            }

            if (obj['population'] <= 0 || obj['gold'] <= 0) {
                let index = locations.indexOf(obj);
                locations.splice(index, 1);
                console.log(`${city} has been wiped off the map!`);
            }
        }
    }


    function prosper(string) {
        let [command, city, gold] = string.split("=>").map(x => isNaN(x) ? x : Number(x));

        if (gold < 0) {
            console.log(`Gold added cannot be a negative number!`);
            return;
        }

        for (let obj of locations) {
            if (obj['town'] == city) {
                obj['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${obj['gold']} gold.`);
            }

        }
    }

    let townCount = locations.length;

    if (townCount > 0) {
        console.log(`Ahoy, Captain! There are ${townCount} wealthy settlements to go to:`);

        for (let obj of locations) {
            console.log(`${obj['town']} -> Population: ${obj['population']} citizens, Gold: ${obj['gold']} kg`);
        }
    } else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}




// solve([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)