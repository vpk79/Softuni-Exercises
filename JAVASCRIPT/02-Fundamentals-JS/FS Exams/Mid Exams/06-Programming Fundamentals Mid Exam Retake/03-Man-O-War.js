function manOwar(input){
    let pirateShip = input[0].split(">").map(x => Number(x));
    let warship = input[1].split(">").map(x => Number(x));
    let shipSectionMaxHealth = Number(input[2]);

    let warIsSinked = false;
    let pirateIsSinked = false;
    let index = 3;;
    let line = input[index];
    index++;

    while(line !== "Retire"){

        if(line.includes("Fire")){
            fire(line);
            if(warIsSinked){ break };
        } else if(line.includes("Defend")){
            defend(line);
            if(pirateIsSinked){ break };
        } else if(line.includes("Repair")){
            repair(line);
        } else if(line.includes("Status")){
            status();
        }

        line = input[index];
        index++;
    }

    if(warIsSinked){
        return ("You won! The enemy ship has sunken.")
    }

    if(pirateIsSinked){
        return ("You lost! The pirate ship has sunken.")
    }

    let pirateShipSum = 0;

    for(let i = 0; i < pirateShip.length; i++){
        pirateShipSum += pirateShip[i];
    }

    let warshipSum = 0;
    for(let i = 0; i < warship.length; i++){
        warshipSum += warship[i];
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);

    function fire(string){
        let arrFire = string.split(" ");
        let index = Number(arrFire[1]);
        let damage = Number(arrFire[2]);

        if(warship[index] !== undefined){
            warship[index] = warship[index] - damage;
            if(warship[index] <= 0){
                warIsSinked = true;
            }
        }
    }
    
    function defend(string){
        let arrDefend = string.split(" ");
        let startIndex = Number(arrDefend[1]);
        let endIndex = Number(arrDefend[2]);
        let damage = Number(arrDefend[3]);

        for(let i = startIndex; i <= endIndex; i++){
            if(pirateShip[startIndex] !== undefined && pirateShip[endIndex] !== undefined){
                pirateShip[i] = pirateShip[i] - damage;
                    if(pirateShip[i] <= 0){
                        pirateIsSinked = true;
                        break;
                    }
            }
        }
    }

    function repair(string){
        let arrRepair = string.split(" ");
        let index = Number(arrRepair[1]);
        let health = Number(arrRepair[2]);

        if(pirateShip[index] !== undefined){
            pirateShip[index] = pirateShip[index] + health;
            if(pirateShip[index] > shipSectionMaxHealth){
                pirateShip[index] = shipSectionMaxHealth;
            }
        }
    }   

    function status(){
        let counter = 0;

        for(let i = 0; i < pirateShip.length; i++){
            if(pirateShip[i] < shipSectionMaxHealth * 0.2){
                counter++
            }
        }

        console.log(`${counter} sections need repair.`);
    }
}





//  console.log(manOwar(([
// "12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
// "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
// "Status",
// "Retire"])
// ))

console.log(manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
));