function solve(input){

    let heroes = [];
    let heroesCount = Number(input.shift());

    for(let i = 0; i < heroesCount; i++){
        let line = input.shift();
        let[name, hp, mp] = line.split(" ").map(x => isNaN(x) ? x : Number(x));
        heroes.push({
            name : name,
            hp : hp,
            mp : mp,
        })
    }


    for(let line of input){
        if(line === 'End') break;
        if(line.includes('Heal')){
            heal(line);
        } else if(line.includes('Recharge')){
            recharge(line);
        } else if (line.includes('TakeDamage')){
            damage(line);
        } else if (line.includes('CastSpell')){
            cast(line);
        }
    }

    for(let obj of heroes){
        console.log(obj['name']);
        console.log(`  HP: ${obj['hp']}`);
        console.log(`  MP: ${obj['mp']}`);
    }
    


    function heal(string){
        let [command, name, amount] = string.split(" - ");
        amount = Number(amount);

        for(let obj of heroes){
            if(obj['name'] === name){
                let hitPoints = obj['hp'];
                if (hitPoints + amount > 100){
                    console.log(`${name} healed for ${100 - hitPoints} HP!`);
                    hitPoints = 100;
                } else{
                    hitPoints += amount;
                    console.log(`${name} healed for ${amount} HP!`);
                }
                obj['hp'] = hitPoints;
            }
        }
    }


    function recharge(string){
        let[command, name, amount] = string.split(" - ");
        amount = Number(amount);
        
        for(let obj of heroes){
            if(obj['name'] === name){
                let mana = obj['mp'];
                if(mana + amount > 200){
                    console.log(`${name} recharged for ${200 - mana} MP!`);
                    mana = 200;
                } else {
                    console.log(`${name} recharged for ${amount} MP!`);
                    mana += amount;
                }
                obj['mp'] = mana;
            }
        }
    }

    function damage(string){
        let[command, name, damage, attacker] = string.split(" - ");
        damage = Number(damage);

        for(let obj of heroes){
            if(obj['name'] === name){
                let hitPoints = obj['hp'];

                if(hitPoints - damage <= 0){
                    console.log(`${name} has been killed by ${attacker}!`);
                    let index = heroes.indexOf(obj);
                    heroes.splice(index, 1);
                } else {
                    hitPoints -= damage;
                    obj['hp'] = hitPoints;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hitPoints} HP left!`);
                }
            }
        }
    }


    function cast(string){
        let[command, name, manaNeeded, spell] = string.split(" - ");
        manaNeeded = Number(manaNeeded);

        for(let obj of heroes){
            if(obj['name'] === name){
                let mana = obj['mp'];
                if(mana < manaNeeded){
                    console.log(`${name} does not have enough MP to cast ${spell}!`);
                } else {
                    mana -= manaNeeded;
                    obj['mp'] = mana;
                    console.log(`${name} has successfully cast ${spell} and now has ${mana} MP!`);
                }
            }
        }
    }


}



// solve([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ])

// solve(['4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'])

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);

